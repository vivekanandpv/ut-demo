import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DemoService } from './demo.service';

//  https://daveceddia.com/jasmine-2-spy-cheat-sheet/

describe('DemoService', () => {
  let service: DemoService;

  it('#create should relay the call to the mock', (done: DoneFn) => {
    const httpClientStub = jasmine.createSpyObj('HttpClient', ['post']);
    const result = {
      message: 'success',
      status: 201,
    };
    const body = { name: 'Learning Angular' };
    httpClientStub.post.and.returnValue(of(result));
    service = new DemoService(httpClientStub);
    service.create(body).subscribe((v) => {
      expect(httpClientStub.post.calls.count()).toBe(1);
      const url = httpClientStub.post.calls.mostRecent().args[0];
      const body = httpClientStub.post.calls.mostRecent().args[1];
      const config = httpClientStub.post.calls.mostRecent().args[2];

      expect(url).toBe('https://jsonplaceholder.typicode.com/todos');
      expect(body).toBe(body);
      expect(config.headers['X-Custom']).toBe('custom value');
      done();
    });
  });
});
