import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DemoService } from './demo.service';

describe('DemoService', () => {
  let service: DemoService;

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getTodos should return result from the stub', (done: DoneFn) => {
    const httpClientStub = jasmine.createSpyObj('HttpClient', ['get']);
    httpClientStub.get.and.returnValue(of([]));
    service = new DemoService(httpClientStub);
    service.getTodos().subscribe((v) => {
      expect(v).toBeInstanceOf(Array);
      done();
    });
  });
});
