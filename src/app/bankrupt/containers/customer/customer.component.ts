import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CustomerService } from '../../services/customer.service';
import { AccountType } from '../../models/account-type.enum';
import { Account } from '../../models/account.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  ACCOUNT_TYPES = [AccountType.CURRENT, AccountType.SAVINGS];

  customer: any;
  newAccountForm: FormGroup;
  newAccount: Account;

  constructor(
    private readonly customerService: CustomerService,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.customerService
      .fetchCustomerDetails()
      .subscribe((customer) => (this.customer = customer));
    this.newAccountForm = this.fb.group({
      accountType: ['', [Validators.required]],
    });
  }

  createAccount(): void {
    this.customerService
      .createAccount(
        this.newAccountForm.get('accountType').value,
        this.customer.sub
      )
      .subscribe((account) => (this.newAccount = account));
  }
}
