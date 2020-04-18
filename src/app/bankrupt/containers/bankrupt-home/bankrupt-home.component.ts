import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { concatMap } from 'rxjs/operators';
import { AuthService } from '../../auth.service';
import { CustomerService } from '../../customer.service';
import { Account } from './../../models/account.model';

const ALL_ACCOUNTS_TAB_ID = 'all';

@Component({
  selector: 'app-bankrupt-home',
  templateUrl: './bankrupt-home.component.html',
  styleUrls: ['./bankrupt-home.component.scss'],
})
export class BankruptHomeComponent implements OnInit {
  accounts: Account[];
  filteredAccounts: Account[];
  lastActiveTabId = ALL_ACCOUNTS_TAB_ID;

  constructor(
    readonly router: Router,
    private readonly customerService: CustomerService,
    readonly authService: AuthService,
    private readonly location: Location,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.customerService
      .fetchCustomerAccounts()
      .pipe(
        concatMap((accounts) => {
          this.accounts = accounts;
          return this.activatedRoute.fragment;
        })
      )
      .subscribe((filterType) => {
        this.filterAccountsByType(filterType);
      });
  }

  filterAccountsByType(type: string) {
    type = !type ? ALL_ACCOUNTS_TAB_ID : type;

    switch (type) {
      case ALL_ACCOUNTS_TAB_ID:
        this.filteredAccounts = this.accounts;
        break;
      default:
        this.filteredAccounts = new Array();
        this.accounts.forEach((element) => {
          if (element.accountType === type.toUpperCase()) {
            this.filteredAccounts.push(element);
          }
        });
        break;
    }

    document.getElementById(this.lastActiveTabId).className = '';
    document.getElementById(type).className = 'is-active';
    this.lastActiveTabId = type;

    const navigationExtras: NavigationExtras =
      type === ALL_ACCOUNTS_TAB_ID ? undefined : { fragment: type };
    this.location.replaceState(
      this.router.createUrlTree(['/home'], navigationExtras).toString()
    );
  }

  filterAccountsByPattern(pattern: string) {
    this.filteredAccounts = new Array();
    this.accounts.forEach((element) => {
      if (element.accountNumber.match(new RegExp(pattern))) {
        this.filteredAccounts.push(element);
      }
    });
  }
}
