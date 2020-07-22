import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { concatMap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { CustomerService } from '../../services/customer.service';
import { Account } from './../../models/account.model';

export const ALL_ACCOUNTS_TAB_ID = 'all';
/*
 * '!' is a special character which tells the logic to ignore pattern search,
 * because undefined is supposed to be used as no filter.
 * '!' will never be used in the account number so here it goes ¯\_(ツ)_/¯.
 */
export const DO_NOT_SEARCH_PATTERN = '!';

@Component({
  selector: 'app-bankrupt-home',
  templateUrl: './bankrupt-home.component.html',
  styleUrls: ['./bankrupt-home.component.scss'],
})
export class BankruptHomeComponent implements OnInit {
  accounts: Account[];
  filteredAccounts: Account[];
  typeFilterToUse: string;
  searchPatternToUse: string;

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
        this.filterAccounts(filterType, '');
      });
  }

  filterAccounts(selectedType: string, searchPattern: string) {
    this.filteredAccounts = this.filterAccountsByType(selectedType);

    this.filteredAccounts = this.filterAccountsByPattern(searchPattern);

    const navigationExtras: NavigationExtras =
      this.typeFilterToUse === ALL_ACCOUNTS_TAB_ID
        ? undefined
        : { fragment: this.typeFilterToUse };
    this.location.replaceState(
      this.router.createUrlTree(['/home'], navigationExtras).toString()
    );
  }

  private filterAccountsByType(selectedType: string) {
    if (!selectedType) {
      // Invoked by search box.
      if (!this.typeFilterToUse) {
        // First search.
        this.typeFilterToUse = ALL_ACCOUNTS_TAB_ID;
      }
    } else {
      // Invoked by filter boxes.
      this.typeFilterToUse = selectedType;
    }

    if (this.typeFilterToUse === ALL_ACCOUNTS_TAB_ID) {
      return this.accounts;
    }
    return this.accounts.filter(
      (account) => account.accountType === this.typeFilterToUse.toUpperCase()
    );
  }

  private filterAccountsByPattern(searchPattern: string) {
    this.searchPatternToUse =
      searchPattern !== DO_NOT_SEARCH_PATTERN
        ? searchPattern
        : this.searchPatternToUse;
    return this.filteredAccounts.filter((account) =>
      account.accountNumber.match(new RegExp(this.searchPatternToUse, 'i'))
    );
  }
}
