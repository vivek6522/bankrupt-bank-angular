import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { TransferReceipt, TransferCommand } from '../models/transfer.model';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = (environment as any).apiUrl;
  }

  transfer(transferCommand: TransferCommand): Observable<TransferReceipt> {
    return this.http.post<TransferReceipt>(
      `${this.apiUrl}/transfers`,
      transferCommand,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  transactionHistory(sourceAccount: string): Observable<TransferReceipt[]> {
    return this.http.get<TransferReceipt[]>(
      `${this.apiUrl}/transfers/account/${sourceAccount}`
    );
  }
}
