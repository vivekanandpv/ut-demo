import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  private currentScoreSubject = new BehaviorSubject<number>(0);
  currentScore$ = this.currentScoreSubject.asObservable();

  title$ = of('Hi there!');

  constructor() {}

  emitNextValue(v: number) {
    this.currentScoreSubject.next(v);
  }
}
