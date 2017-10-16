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
    // Initialize the new Bg
    const bg: Bg = new Bg();

    // Set the id
    bg.id = data.getAttribute('id');

    // Set the name
    let element: Element = data.getElementsByTagName('name').item(0);
    if (element !== null) {
      bg.name = element.getAttribute('value');
    }

    // Set the url
    bg.url = '';

    // Set the thumbnail url
    element = data.getElementsByTagName('thumbnail').item(0);
    if (element !== null) {
      bg.thumbnail = element.innerHTML;
    }

    // Set the image url
    element = data.getElementsByTagName('image').item(0);
    if (element !== null) {
      bg.image = element.innerHTML;
    }

    // Set min player count
      element = data.getElementsByTagName('minplayers').item(0);
    if (element !== null) {
      bg.minPlayers = +element.getAttribute('value');
    }

    // Set max player count
    element = data.getElementsByTagName('maxplayers').item(0);
    if (element !== null) {
      bg.maxPlayers = +element.getAttribute('value');
    }

    // Set the description
    element = data.getElementsByTagName('description').item(0);
    if (element !== null) {
      bg.description = element.innerHTML.replace(/&amp;#10;/g, '\n');
    }

    // Set the play time
    element = data.getElementsByTagName('playingtime').item(0);
    if (element !== null) {
      bg.playTime = +element.getAttribute('value');
    }

    // Set the minimum age
    element = data.getElementsByTagName('minage').item(0);
    if (element !== null) {
      bg.minAge = +element.getAttribute('value');
    }

    // Set the data lists
    const links: any = data.getElementsByTagName('link');
    bg.expansionsIDs = [];
    bg.expansionOfId = [];
    bg.category = [];
    bg.mechanic = [];
    bg.family = [];
    bg.publisher = [];
    bg.designer = [];
    bg.artist = [];
    for (let i = 0; i < links.length; i++) {
      element = links.item(i);
      switch (element.getAttribute('type')) {
        case 'boardgameexpansion' :
          if (!element.getAttribute('inbound')) {
            bg.expansionsIDs.push(element.getAttribute('id'));
          } else {
            bg.expansionOfId.push(element.getAttribute('id'));
          }
          break;
        case 'boardgamecategory' :
          bg.category.push(element.getAttribute('id'));
          break;
        case 'boardgamemechanic ' :
          bg.mechanic.push(element.getAttribute('id'));
          break;
        case 'boardgamefamily' :
          bg.family.push(element.getAttribute('id'));
          break;
        case 'boardgamedesigner' :
          bg.designer.push(element.getAttribute('id'));
          break;
        case 'boardgameartist' :
          bg.artist.push(element.getAttribute('id'));
          break;
        case 'boardgamepublisher' :
          bg.publisher.push(element.getAttribute('id'));
          break;
      }
    }

    // Set the rating and rank
    element = data.getElementsByTagName('statistics').item(0);
    if (element !== null) {
      element = element.getElementsByTagName('ratings').item(0);
      if (element !== null) {
        if (element.getElementsByTagName('average').item(0) !== null) {
          bg.rating = +element.getElementsByTagName('average').item(0).getAttribute('value');
        }
        element = element.getElementsByTagName('average').item(0);
        if (element !== null) {
          element = element.getElementsByTagName('rank').item(0);
          if (element !== null && element.getAttribute('name') === 'boardgame') {
            bg.rank = +element.getAttribute('value');
          }
        }
      }
    }

    return bg;
  }
}
