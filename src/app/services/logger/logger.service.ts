import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  static error(e: String): void {
    console.error(e);
  }

  static log(l: String): void {
    console.log(l);
  }

  static warn(w: String): void {
    console.warn(w);
  }
}
