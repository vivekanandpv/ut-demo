import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  constructor() {}

  getCounter() {
    return of(100);
  }
}
