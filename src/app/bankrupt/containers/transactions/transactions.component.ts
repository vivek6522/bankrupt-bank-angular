import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Account } from '../../models/account.model';
import { TransferReceipt } from '../../models/transfer.model';
import { TransferService } from '../../services/transfer.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  transactionHistory: TransferReceipt[];
  accounts: Account[];

  constructor(
    private readonly transferService: TransferService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
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
