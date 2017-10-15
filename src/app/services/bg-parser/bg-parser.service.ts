import { Injectable } from '@angular/core';

import { Bg } from '../../model/bg';

@Injectable()
export class BgParserService {

  constructor() { }

  static parseBgData(data: string): Bg[] {
    const parsedData: Document = BgParserService.parseXML(data);
    const itemList: any = parsedData.getElementsByTagName('item');
    const bgList: Bg[] = [];

    for (let i = 0; i < itemList.length; i++) {
      bgList.push(BgParserService.createBg(itemList[i]));
    }

    return bgList;
  }

  private static parseXML(data: string): Document {
    return new DOMParser().parseFromString(data, 'text/xml');
  }

  private static createBg(data: HTMLElement): Bg {
    const id: string = data.getAttribute('id');
    const name: string = data.getElementsByTagName('name')[0].getAttribute('value');
    const links: any = data.getElementsByTagName('link');
    const expansions: string[] = [];

    for (let i = 0; i < links.length; i++) {
      if (links[i].getAttribute('type') === 'boardgameexpansion' && !links[i].getAttribute('inbound')) {
        expansions.push(links[i].getAttribute('id'));
      }
    }

    return {
      id: id,
      name: name,
      url: '',

      image: '',
      thumbnail: '',

      minPlayers: 2,
      maxPlayers: 4,
      description: 'HAHAAAA ! description !',
      playTime: 120,
      minAge: 14,

      category: [],
      mechanic: [],
      family: [],

      rating: 5,

      publisher: [],
      designer: [],
      author: [],
      artist: [],

      expansionsIDs: expansions,
      expansionOfId: ''
    };
  }
}
