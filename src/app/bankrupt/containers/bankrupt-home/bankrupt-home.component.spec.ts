import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  BankruptHomeComponent,
  ALL_ACCOUNTS_TAB_ID,
} from './bankrupt-home.component';
import { CustomerService } from '../../services/customer.service';
import { MockCustomerService } from '../../services/customer.mock';
import { AccountType } from '../../models/account-type.enum';
import { DO_NOT_SEARCH_PATTERN } from './bankrupt-home.component';

fdescribe('BankruptHomeComponent', () => {
  let component: BankruptHomeComponent;
  let fixture: ComponentFixture<BankruptHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BankruptHomeComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [
        {
          provide: CustomerService,
          useClass: MockCustomerService,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankruptHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter accounts when a specific type is requested', () => {
    expect(component).toBeTruthy();

    component.filterAccounts(AccountType.CURRENT, DO_NOT_SEARCH_PATTERN);
    expect(component.filteredAccounts.length).toBe(5);
  });

  it('should not filter accounts when all types are requested', () => {
    expect(component).toBeTruthy();

    component.filterAccounts(ALL_ACCOUNTS_TAB_ID, DO_NOT_SEARCH_PATTERN);
    expect(component.filteredAccounts.length).toBe(8);
  });

  it('should filter accounts when a specific pattern is requested', () => {
    expect(component).toBeTruthy();

    component.filterAccounts(undefined, '789');
    expect(component.filteredAccounts.length).toBe(3);
  });
});
