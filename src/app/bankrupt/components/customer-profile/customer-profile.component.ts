import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss'],
})
export class CustomerProfileComponent implements OnInit {
  @Input()
  customer: Customer;

  constructor() {}

  ngOnInit(): void {}
}
