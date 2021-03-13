import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer, Invoice } from './demo.service';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private httpClient: HttpClient) {}

  getInvoice(id: number) {
    return this.httpClient.get<Invoice>(this.url);
  }

  getCustomer(id: number) {
    return this.httpClient.get<Customer>(this.url);
  }
}
