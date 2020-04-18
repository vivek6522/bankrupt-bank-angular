import { Account } from './account.model';

export class Customer {
  id: number;
  name: string;
  email: string;
  accounts: Account[];
}
