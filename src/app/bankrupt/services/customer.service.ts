import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { AccountType } from '../models/account-type.enum';
import { Account } from '../models/account.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = (environment as any).apiUrl;
  }

  fetchCustomerDetails(): Observable<any> {
    return this.http.get<any>(
      environment.authWellKnownEndpoints.userinfo_endpoint
    );
  }

  fetchCustomerAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(`${this.apiUrl}/accounts/self`);
  }

  createAccount(
    accountType: AccountType,
    customerId: string
  ): Observable<Account> {
    return this.http.post<Account>(
      `${this.apiUrl}/accounts`,
      {
        accountType,
        customerId,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
