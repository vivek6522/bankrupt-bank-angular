import { Observable, of } from 'rxjs';
import { TransferCommand, TransferReceipt } from '../models/transfer.model';

export class MockTransferService {
  transfer(transferCommand: TransferCommand): Observable<TransferReceipt> {
    return of({
      paymentReference: 'payment-reference',
      source: transferCommand.source,
      target: transferCommand.target,
      amount: transferCommand.amount,
      description: transferCommand.description,
      timestamp: {
        nano: 0,
        year: 2020,
        monthValue: 1,
        dayOfMonth: 1,
        hour: 0,
        minute: 0,
        second: 0,
        month: 'January',
        dayOfWeek: 'Sunday',
        dayOfYear: 1,
        chronology: {},
      },
    });
  }
}
