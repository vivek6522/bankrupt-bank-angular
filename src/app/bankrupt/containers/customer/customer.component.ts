import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Account } from './../../models/account.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  customer: any;
  customerAccounts: Account[];

  constructor(private readonly customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService
      .fetchCustomerDetails()
      .subscribe((customer) => (this.customer = customer));
    this.customerService
      .fetchCustomerAccounts()
      .subscribe(
        (customerAccounts) => (this.customerAccounts = customerAccounts)
      );
  }
}
