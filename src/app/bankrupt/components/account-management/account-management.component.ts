import { Component, OnInit, Input } from '@angular/core';
import { AccountType } from '../../models/account-type.enum';
import { CustomerService } from '../../services/customer.service';
import { Account } from '../../models/account.model';

@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrls: ['./account-management.component.scss'],
})
export class AccountManagementComponent implements OnInit {
  readonly ACCOUNT_TYPES = [AccountType.CURRENT, AccountType.SAVINGS];

  @Input()
  customerId: string;
  createdAccount: Account;
  newAccountType = AccountType.CURRENT;

  constructor(private readonly customerService: CustomerService) {}

  ngOnInit(): void {}

  createAccount(): void {
    this.customerService
      .createAccount(this.newAccountType, this.customerId)
      .subscribe((account) => (this.createdAccount = account));
  }
}
