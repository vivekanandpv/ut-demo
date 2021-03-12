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

  it('#emitNextScoreResolve should resolve the number (classic)', (done: DoneFn) => {
    const score = 123;
    service.emitNextScoreResolve(score).then((v) => {
      expect(v).toBe(score);
      done();
    });
  });

  it('#emitNextScoreResolve should resolve the number (async version)', async () => {
    const score = 123;
    await expectAsync(service.emitNextScoreResolve(score)).toBeResolvedTo(
      score
    );
  });

  it('#emitNextScoreReject should reject the promise (async version)', async () => {
    const score = 123;
    await expectAsync(service.emitNextScoreReject(score)).toBeRejectedWithError(
      'Oops!'
    );
  });
});
