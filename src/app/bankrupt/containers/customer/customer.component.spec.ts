import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomerComponent } from './customer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MockTranslatePipe } from '../../mocks/translate-pipe.mock';
import { CustomerService } from '../../services/customer.service';
import { MockCustomerService } from '../../services/customer.mock';
import { By } from '@angular/platform-browser';
import { AccountType } from '../../models/account-type.enum';

fdescribe('CustomerComponent', () => {
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerComponent, MockTranslatePipe],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        {
          provide: CustomerService,
          useClass: MockCustomerService,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display customer details', () => {
    expect(component).toBeTruthy();

    const debugElement = fixture.debugElement;
    expect(
      debugElement.query(By.css('#customerId')).nativeElement.innerText
    ).toBe('id');
    expect(
      debugElement.query(By.css('#customerName')).nativeElement.innerText
    ).toBe('Some Name');
    expect(
      debugElement
        .query(By.css('#customerPicture'))
        .nativeElement.getAttribute('src')
    ).toBe('https://link.to/picture.png');
  });

  it('should create account', () => {
    expect(component).toBeTruthy();

    component.newAccountForm.get('accountType').setValue(AccountType.CURRENT);
    component.createAccount();
    expect(component.newAccount.accountNumber).toBe('NL11ABNA1111111111');
    expect(component.newAccount.accountType).toBe(AccountType.CURRENT);
    expect(component.newAccount.balance).toBe(0.0);
    expect(component.newAccount.preferred).toBeFalse();
  });
});
