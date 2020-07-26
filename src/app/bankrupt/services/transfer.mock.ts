import { Observable, of } from 'rxjs';
import { TransferCommand, TransferReceipt } from '../models/transfer.model';
import { DUMMY_TRANSFERS } from '../mocks/transfers.data';

export class MockTransferService {
  transfer(transferCommand: TransferCommand): Observable<TransferReceipt> {
    return of({
      paymentReference: 'payment-reference',
      source: transferCommand.source,
      target: transferCommand.target,
      amount: transferCommand.amount,
      description: transferCommand.description,
      timestamp: '26-07-2020 09:24:56',
    });
  }

  transactionHistory(sourceAccount: string): Observable<TransferReceipt[]> {
    return of(DUMMY_TRANSFERS);
  }
}
