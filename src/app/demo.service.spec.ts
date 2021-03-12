import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DemoService } from './demo.service';

describe('DemoService', () => {
  let service: DemoService;

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getTodos should relay the call to the mock', (done: DoneFn) => {
    const httpClientStub = jasmine.createSpyObj('HttpClient', ['get']);
    const resultArray = [1, 2, 3];
    httpClientStub.get.and.returnValue(of(resultArray));
    service = new DemoService(httpClientStub);
    service.getTodos().subscribe((v) => {
      expect(httpClientStub.get.calls.count()).toBe(1);
      httpClientStub.get.calls
        .mostRecent()
        .returnValue.subscribe((r: any[]) => {
          expect(r).toBe(resultArray);
          done();
        });
    });
  });
});
