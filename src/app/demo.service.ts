import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  val = 'hi there!';
  constructor() {}

  getMessage(): string {
    return this.val.toUpperCase();
  }
}
