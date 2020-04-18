import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Account } from './models/account.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = (environment as any).apiUrl;
  }

  fetchAccountDetails(id: string): Observable<Account> {
    return this.http.get<Account>(`${this.apiUrl}/accounts/${id}`);
  }
}
