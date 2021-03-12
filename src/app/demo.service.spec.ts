import { TestBed } from '@angular/core/testing';

import { DemoService } from './demo.service';

describe('DemoService', () => {
  let service: DemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should compute simple interest', () => {
    expect(service.computeSimpleInterest(100, 1, 10)).toEqual(10);
  });

  it('should throw error when compute area of circle is called', () => {
    //  write a lambda for expect
    expect(() => service.computeAreaOfCircle(2)).toThrowError('Oops!');
  });

  it('should have initial scores array to be empty', () => {
    expect(service.getScores().length).toEqual(0);
  });

  it('should add score to the scores', () => {
    const score = 120;
    service.addScore(score);
    expect(service.getScores().length).toEqual(1);
    expect(service.getScores()[0]).toEqual(score);
  });
});
