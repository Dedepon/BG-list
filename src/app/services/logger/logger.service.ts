import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  static error(e: string): void {
    console.error(e);
  }

  static log(l: string): void {
    console.log(l);
  }

  static warn(w: string): void {
    console.warn(w);
  }
}
