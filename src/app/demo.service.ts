import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  private scores: number[] = [];

  constructor() {}

  computeSimpleInterest(p: number, t: number, r: number): number {
    return (p * t * r) / 100.0;
  }

  computeAreaOfCircle(r: number): number {
    throw new Error('Oops!');
  }

  getScores(): number[] {
    return this.scores;
  }

  addScore(s: number): void {
    this.scores.push(s);
  }
}
