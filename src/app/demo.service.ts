import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  private url = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private httpClient: HttpClient) {}

  create(form: any) {
    return this.httpClient.post(this.url, form, {
      headers: {
        'X-Custom': 'custom value',
      },
    });
  }
}
