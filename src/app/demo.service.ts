import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  emitNextScoreResolve(s: number): Promise<number> {
    return new Promise((resolve, reject) => {
      resolve(s);
    });
  }

  emitNextScoreReject(s: number): Promise<number> {
    return new Promise((resolve, reject) => {
      reject(new Error('Oops!'));
    });
  }
}
