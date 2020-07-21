import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { BankruptAuthGuard } from './services/bankrupt.authguard';
import { BankruptComponent } from './bankrupt.component';
import { BankruptHomeComponent } from './containers/bankrupt-home/bankrupt-home.component';
import { CustomerComponent } from './containers/customer/customer.component';
import { TransactionsComponent } from './containers/transactions/transactions.component';
import { TransferComponent } from './containers/transfer/transfer.component';
import { CustomerService } from './services/customer.service';
import { TransferService } from './services/transfer.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BankruptInterceptor } from './interceptors/bankrupt.interceptor';
import { TranslateModule } from '@ngx-translate/core';
import { SuccessMessageComponent } from './components/success-message/success-message.component';
import { FormValidationMessagesComponent } from './components/form-validation-messages/form-validation-messages.component';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';
import { AccountManagementComponent } from './components/account-management/account-management.component';

export const ROUTES = [
  {
    path: 'home',
    component: BankruptHomeComponent,
    canActivate: [BankruptAuthGuard],
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
    BankruptHomeComponent,
    BankruptComponent,
    SuccessMessageComponent,
    FormValidationMessagesComponent,
    CustomerProfileComponent,
    AccountManagementComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    ReactiveFormsModule,
    TranslateModule.forChild(),
    FormsModule,
  ],
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
