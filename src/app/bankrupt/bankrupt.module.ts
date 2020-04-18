import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { BankruptAuthGuard } from './bankrupt.authguard';
import { BankruptComponent } from './bankrupt.component';
import { BankruptHomeComponent } from './containers/bankrupt-home/bankrupt-home.component';
import { CustomerComponent } from './containers/customer/customer.component';
import { TransactionsComponent } from './containers/transactions/transactions.component';
import { TransferComponent } from './containers/transfer/transfer.component';
import { CustomerService } from './customer.service';
import { AbsPipe } from './pipes/abs.pipe';
import { TransferService } from './transfer.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BankruptInterceptor } from './interceptors/bankrupt.interceptor';

export const ROUTES = [
  {
    path: 'home',
    component: BankruptHomeComponent,
  },
  {
    path: 'customers',
    component: CustomerComponent,
    canActivate: [BankruptAuthGuard],
  },
  {
    path: 'transfer',
    component: TransferComponent,
    canActivate: [BankruptAuthGuard],
  },
  {
    path: 'transactions/:sourceAccount',
    component: TransactionsComponent,
    canActivate: [BankruptAuthGuard],
  },
];

@NgModule({
  declarations: [
    CustomerComponent,
    TransferComponent,
    TransactionsComponent,
    AbsPipe,
    BankruptHomeComponent,
    BankruptComponent
  ],
  imports: [CommonModule, RouterModule.forChild(ROUTES), ReactiveFormsModule],
  exports: [BankruptComponent],
  providers: [
    CustomerService,
    TransferService,
    AuthService,
    BankruptAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BankruptInterceptor,
      multi: true,
    },
  ],
  entryComponents: [BankruptComponent],
})
export class BankruptModule {}
