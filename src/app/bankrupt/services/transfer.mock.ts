import { Observable, of } from 'rxjs';

export class MockTransferService {
  transfer(transferCommand: any): Observable<any> {
    return of({
      paymentReference: 'payment-reference',
      source: transferCommand.source,
      target: transferCommand.target,
      amount: transferCommand.amount,
      description: transferCommand.description,
    });
  }
}
