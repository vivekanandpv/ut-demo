import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { RestService } from './rest.service';

export interface Invoice {
  invoiceId: number;
  customerId: number;
  totalAmount: number;
}

export interface Customer {
  customerId: number;
  city: string;
}

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  totalAmount = -1;
  constructor(private restService: RestService) {}

  compose(id: number) {
    return this.restService.getInvoice(id).pipe(
      mergeMap((i) => {
        this.totalAmount = i.totalAmount;
        return this.restService.getCustomer(i.customerId);
      })
    );
  }
}
