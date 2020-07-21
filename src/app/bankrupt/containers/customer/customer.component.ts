import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  customer: Customer;

  constructor(private readonly customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService
      .fetchCustomerDetails()
      .subscribe((customer) => (this.customer = customer));
  }
}
