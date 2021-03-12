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

  it('#title$ should return value from observable', (done: DoneFn) => {
    service.title$.subscribe((v) => {
      expect(v).toBe('Hi there!');
      done();
    });
  });

  it('#currentScore$ should emit the new value set', (done: DoneFn) => {
    const value = 120;
    service.emitNextValue(value);
    service.currentScore$.subscribe((v) => {
      expect(v).toBe(value);
      done();
    });
  });
});
