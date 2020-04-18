import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Account } from '../../models/account.model';
import { TransferReceipt } from '../../models/transfer.model';
import { TransferService } from '../../transfer.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  transactionHistory: TransferReceipt[];
  accounts: Account[];
  form: FormGroup;

  constructor(
    private readonly transferService: TransferService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({});
    this.activatedRoute.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          return this.transferService.transactionHistory(
            params.get('sourceAccount')
          );
        })
      )
      .subscribe((history) => {
        this.transactionHistory = history;
      });
  }

  constructTransferLink(transaction: TransferReceipt): string {
    return `transfer?targetAccount=${transaction.target}&sourceAccount=${
      transaction.source
    }&amount=${Math.abs(transaction.amount)}&description=${
      transaction.description
    }`;
  }

  isDebit(amount: string): boolean {
    return parseInt(amount, 10) < 0;
  }
}
