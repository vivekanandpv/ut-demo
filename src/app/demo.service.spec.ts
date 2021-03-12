import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { DemoService } from './demo.service';

describe('DemoService', () => {
  let service: DemoService;
  let httpClient: HttpClient;

  beforeEach(() => {
    //  The TestBed is the most important of the Angular testing utilities.
    //  The TestBed creates a dynamically - constructed Angular test module
    //  that emulates an Angular @NgModule.

    //  The TestBed.configureTestingModule() method takes a metadata object
    //  that can have most of the properties of an @NgModule.
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    httpClient = TestBed.inject(HttpClient); //TestBed.get() was deprecated as of Angular version 9.
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
