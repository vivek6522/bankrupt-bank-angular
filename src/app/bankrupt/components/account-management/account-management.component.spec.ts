import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountManagementComponent } from './account-management.component';
import { AccountType } from '../../models/account-type.enum';
import { CustomerService } from '../../services/customer.service';
import { MockCustomerService } from '../../services/customer.mock';
import { MockTranslatePipe } from '../../mocks/translate-pipe.mock';
import { FormsModule } from '@angular/forms';

describe('AccountManagementComponent', () => {
  let component: AccountManagementComponent;
  let fixture: ComponentFixture<AccountManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountManagementComponent, MockTranslatePipe],
      imports: [FormsModule],
      providers: [
        {
          provide: CustomerService,
          useClass: MockCustomerService,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountManagementComponent);
    component = fixture.componentInstance;
    component.customerId = 'id';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create account', () => {
    expect(component).toBeTruthy();

    component.createAccount();
    expect(component.createdAccount.accountNumber).toBe('NL11ABNA1111111111');
    expect(component.createdAccount.accountType).toBe(AccountType.CURRENT);
    expect(component.createdAccount.balance).toBe(0.0);
    expect(component.createdAccount.preferred).toBeFalse();
  });
});
