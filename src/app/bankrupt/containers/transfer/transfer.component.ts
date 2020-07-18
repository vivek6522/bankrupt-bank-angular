import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { Account } from '../../models/account.model';
import { TransferService } from '../../services/transfer.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})
export class TransferComponent implements OnInit {
  transferForm: FormGroup;
  amountInCents: number;
  accounts: Account[];

  constructor(
    private readonly fb: FormBuilder,
    private readonly transferService: TransferService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.customerService
      .fetchCustomerAccounts()
      .subscribe((accounts) => (this.accounts = accounts));

    const targetAccount = this.activatedRoute.snapshot.queryParamMap.get(
      'targetAccount'
    );
    const sourceAccount = this.activatedRoute.snapshot.queryParamMap.get(
      'sourceAccount'
    );
    const amount = this.activatedRoute.snapshot.queryParamMap.get('amount');
    const description = this.activatedRoute.snapshot.queryParamMap.get(
      'description'
    );

    this.transferForm = this.fb.group({
      source: sourceAccount || '',
      target: targetAccount || '',
      amount: [amount || '', [Validators.required]],
      description: description || '',
    });
  }

  transfer() {
    if (this.transferForm.invalid) {
      return;
    }
    const transferCommand = this.transferForm.value;
    this.transferService
      .transfer({
        source: transferCommand.source,
        target: transferCommand.target,
        amount: parseFloat(transferCommand.amount),
        description: transferCommand.description,
      })
      .subscribe((response) => console.log(response));
  }
}
