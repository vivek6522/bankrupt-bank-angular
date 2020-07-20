import { Observable, of } from 'rxjs';
import { DUMMY_ACCOUNTS } from '../mocks/accounts.data';
import { Account } from '../models/account.model';

export class MockCustomerService {
  fetchCustomerAccounts(): Observable<Account[]> {
    return of(DUMMY_ACCOUNTS);
  }
}
