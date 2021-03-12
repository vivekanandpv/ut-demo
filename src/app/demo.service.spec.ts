import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { DemoService } from './demo.service';

describe('DemoService', () => {
  let service: DemoService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getTodos should return actual array from api', (done: DoneFn) => {
    service = new DemoService(httpClient);
    service.getTodos().subscribe((v) => {
      expect(v).toBeInstanceOf(Array);
      expect(v.length).toBe(200);
      done();
    });
  });
});
