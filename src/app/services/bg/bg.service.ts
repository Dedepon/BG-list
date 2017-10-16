import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { Bg } from '../../model/bg';
import { LoggerService } from '../logger/logger.service';
import { BgParserService } from '../bg-parser/bg-parser.service';

const url = 'https://www.boardgamegeek.com/xmlapi2/thing/?stats=1&id=';

@Injectable()
export class BgService {
  private bgList: Map<string, Bg> = new Map();
  constructor(private http: Http) { }

  getBgInfos(id: string): Promise<Bg> {
    if (this.bgList[id]) { return new Promise<Bg> (resolve => resolve(this.bgList[id])); }

    return this.http.get(url + id)
      .toPromise()
      .then(response => {
        this.bgList[id] = BgParserService.parseBgData(response.text())[0];
        return this.bgList[id];
      })
      .catch(val => {
        LoggerService.error(val);
      });
  }

  getBgTree(rootId: string): Promise<[string, Bg][]> {
    return this.getBgInfos(rootId)
      .then(bg => {
        return this.getExpansionDetails(bg)
          .then(() => {
            return new Promise(resolve => resolve(this.mapToTupleArray(rootId)));
          });
      });
  }

  getBgListInfos(id: string): Promise<Map<string, Bg>> {
    if (id.indexOf(',') === -1) { return this.getBgInfos(id).then(bg => {
        return new Map([[bg.id, bg]]);
      });
    }

    // TODO parse which id is already in memory !

    return this.http.get(url + id)
      .toPromise()
      .then(response => {
        const expList: Bg[] = BgParserService.parseBgData(response.text());
        for (let j = 0; j < expList.length; j++) {
          this.bgList[expList[j].id] = expList[j];
        }
        return this.bgList; // todo change the return for only the bg from the list
      })
      .catch(val => {
        LoggerService.error(val);
      });
  }

  getExpansionDetails(bg: Bg): Promise<Map<string, Bg>> {
    let expIds = '';
    for (let i = 0; i < bg.expansionsIDs.length; i++) {
      if (expIds !== '') { expIds = expIds + ','; }
      expIds = expIds + bg.expansionsIDs[i];
    }
    if (expIds === '') { return new Promise(resolve => resolve([bg])); }
    return this.getBgListInfos(expIds)
      .then(list => {
        return list; // todo check list of further exp
      });
  }

  private mapToTupleArray(root: string): [string, Bg][] {
    const rootBg = this.bgList[root];
    let list: [string, Bg][] = [[root, rootBg]];
    if (rootBg.expansionsIDs.length !== 0) {
      for (let i = 0; i < rootBg.expansionsIDs.length; i++) {
        const expList: [string, Bg][] = this.mapToTupleArray(rootBg.expansionsIDs[i]);
        list = list.concat(expList);
      }
    }
    return list;
  }

}
