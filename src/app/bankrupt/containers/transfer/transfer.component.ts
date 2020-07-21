import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  transferForm = this.fb.group({
    source: ['', Validators.required],
    target: ['', Validators.required],
    amount: ['', Validators.required],
    description: '',
  });
  accounts: Account[];
  createdPaymentReference: string;

  constructor(
    private readonly fb: FormBuilder,
    private readonly transferService: TransferService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.customerService.fetchCustomerAccounts().subscribe((accounts) => {
      this.accounts = accounts;
      // Fill in the preferred account for transfer.
      this.transferForm
        .get('source')
        .setValue(
          this.accounts.filter((account) => account.preferred)[0].accountNumber
        );
    });

    // Fill in fields if present in route (navigating to this page from another component).

    // prettier-ignore
    const sourceAccount = this.activatedRoute.snapshot.queryParamMap.get('sourceAccount');
    // prettier-ignore
    const targetAccount = this.activatedRoute.snapshot.queryParamMap.get('targetAccount');
    // prettier-ignore
    const amount = this.activatedRoute.snapshot.queryParamMap.get('amount');
    // prettier-ignore
    const description = this.activatedRoute.snapshot.queryParamMap.get('description');

    this.transferForm.get('source').setValue(sourceAccount);
    this.transferForm.get('target').setValue(targetAccount);
    this.transferForm.get('amount').setValue(amount);
    this.transferForm.get('description').setValue(description);
  }

  transfer() {
    const transferCommand = this.transferForm.value;
    this.transferService
      .transfer({
        source: transferCommand.source,
        target: transferCommand.target,
        amount: parseFloat(transferCommand.amount),
        description: transferCommand.description,
      })
      .subscribe(
        (response) => (this.createdPaymentReference = response.paymentReference)
      );
  }
}
