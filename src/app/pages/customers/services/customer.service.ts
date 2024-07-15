import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combineLatest, forkJoin, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private customersUrl = 'http://localhost:3000/customers';
  private transactionsUrl = 'http://localhost:3000/transactions';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<any> {
    return this.http.get<any>(this.customersUrl);
  }

  getTransactions(): Observable<any[]> {
    return this.http.get<any[]>(this.transactionsUrl);
  }


  mergeData(): Observable<any[]> {
    return combineLatest([this.getCustomers(), this.getTransactions()])
      .pipe(
        map(([customers, transactions]) => {
          const customerMap = customers.reduce((acc: any, customer: any) => ({ ...acc, [customer.id]: customer }), {});
          return transactions.map(transaction => ({ ...transaction, ...customerMap[transaction.customer_id] }));
        })
      );
  }
}
