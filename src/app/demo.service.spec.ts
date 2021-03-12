import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DemoService } from './demo.service';

describe('DemoService', () => {
  let service: DemoService;

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getTodos should return result from mock', (done: DoneFn) => {
    const mockHttpClient = { get: (url: string) => of([]) };
    service = new DemoService(mockHttpClient as HttpClient);
    service.getTodos().subscribe((v) => {
      expect(v).toBeInstanceOf(Array);
      done();
    });
  });
});
