import { AccountType } from '../models/account-type.enum';

export const DUMMY_ACCOUNTS = [
  {
    accountNumber: 'NL80ABNA0419499482',
    accountType: AccountType.CURRENT,
    balance: 1000.00,
    preferred: true,
  },
  {
    accountNumber: 'NL12ABNA0123456789',
    accountType: AccountType.SAVINGS,
    balance: 1000.00,
    preferred: false,
  },
  {
    accountNumber: 'NL21ABNA9876543210',
    accountType: AccountType.CURRENT,
    balance: 0.00,
    preferred: false,
  },
  {
    accountNumber: 'NL80ABNA0123456789',
    accountType: AccountType.CURRENT,
    balance: 12345.67,
    preferred: false,
  },
  {
    accountNumber: 'NL80ABNA987654321',
    accountType: AccountType.SAVINGS,
    balance: 98765.43,
    preferred: false,
  },
  {
    accountNumber: 'NL12ABNA345678901',
    accountType: AccountType.CURRENT,
    balance: 12.12,
    preferred: false,
  },
  {
    accountNumber: 'NL98ABNA765432109',
    accountType: AccountType.CURRENT,
    balance: 99.99,
    preferred: false,
  },
  {
    accountNumber: 'NL00ABNA000000000',
    accountType: AccountType.SAVINGS,
    balance: 0.00,
    preferred: false,
  },
];
