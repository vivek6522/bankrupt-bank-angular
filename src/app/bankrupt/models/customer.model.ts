import { Account } from './account.model';

export interface Customer {
  id: number;
  name: string;
  email: string;
  accounts: Account[];
}
