import { Observable, of, throwError } from 'rxjs';
import { DUMMY_ACCOUNTS } from '../mocks/accounts.data';
import { Account } from '../models/account.model';
import { AccountType } from '../models/account-type.enum';

export class MockCustomerService {
  fetchCustomerAccounts(): Observable<Account[]> {
    return of(DUMMY_ACCOUNTS);
  }

  fetchCustomerDetails(): Observable<any> {
    return of({
      sub: 'id',
      name: 'Some Name',
      picture: 'https://link.to/picture.png',
    });
  }

  createAccount(accountType: AccountType, _: string): Observable<Account> {
    if (accountType) {
      return of({
        accountNumber: 'NL11ABNA1111111111',
        accountType,
        balance: 0.0,
        preferred: false,
      });
    }
  }
}
