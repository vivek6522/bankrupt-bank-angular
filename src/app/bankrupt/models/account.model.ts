import { AccountType } from './account-type.enum';

export interface Account {
  accountNumber: string;
  accountType: AccountType;
  balance: number;
  preferred: boolean;
}
