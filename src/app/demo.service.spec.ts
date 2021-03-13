import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DemoService } from './demo.service';

describe('DemoService', () => {
  let service: DemoService;

  it('#getTodos should return result from mock', (done: DoneFn) => {
    const mockHttpClient = {
      get: (url: string) =>
        of({
          invoiceId: 101,
          customerId: 102,
          totalAmount: 2500,
          city: 'Mumbai',
        }),
    };

    const restServiceSpy = jasmine.createSpyObj('RestService', [
      'getInvoice',
      'getCustomer',
    ]);

    restServiceSpy.getInvoice.and.returnValue(
      of({
        invoiceId: 101,
        customerId: 102,
        totalAmount: 2500,
      })
    );

    restServiceSpy.getCustomer.and.returnValue(
      of({
        invoiceId: 101,
        customerId: 102,
        totalAmount: 2500,
        city: 'Bengaluru',
      })
    );

    service = new DemoService(restServiceSpy);
    service.compose(205).subscribe((v) => {
      expect(v.city).toBe('Bengaluru');
      expect(v.customerId).toBe(102);
      expect(service.totalAmount).toBe(2500);
      done();
    });
  });
});
