import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combineLatest, forkJoin, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private baseUrl = 'https://abdulrahmanahmedzaghloul.github.io/api/db.json';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getTransactions(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }


  mergeData(): Observable<any> {
    return combineLatest([this.getCustomers(), this.getTransactions()])
      .pipe(
        map(([data1, data2]) => {
          const customerMap = data1.customers.reduce((acc: any, customer: any) => ({ ...acc, [customer.id]: customer }), {});
          return data2.transactions.map((transaction: any) => ({ ...transaction, ...customerMap[transaction.customer_id] }));
        })
      );
  }
}
