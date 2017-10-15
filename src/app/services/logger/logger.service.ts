import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  static error(e: string): void {
    console.error(new Date().toUTCString() + ' [ERROR] : ' + e);
  }

  static log(l: string): void {
    console.log(new Date().toUTCString() + ' [INFO]: ' + l);
  }

  static warn(w: string): void {
    console.warn(new Date().toUTCString() + ' [WARNING] : ' + w);
  }
}
