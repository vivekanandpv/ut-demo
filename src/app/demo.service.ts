import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  private url = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private httpClient: HttpClient) {}

  getTodos() {
    return this.httpClient.get<any[]>(this.url);
  }
}
