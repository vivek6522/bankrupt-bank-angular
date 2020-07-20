import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TransferComponent } from './transfer.component';
import { MockTranslatePipe } from '../../mocks/translate-pipe.mock';
import { CustomerService } from '../../services/customer.service';
import { DUMMY_ACCOUNTS } from '../../mocks/accounts.data';
import { ActivatedRoute } from '@angular/router';
import { TransferService } from '../../services/transfer.service';
import { MockTransferService } from '../../services/transfer.mock';
import { MockCustomerService } from '../../services/customer.mock';

describe('TransferComponent', () => {
  let component: TransferComponent;
  let fixture: ComponentFixture<TransferComponent>;

  const mockQueryParamMap = new Map<string, string>();
  mockQueryParamMap.set('sourceAccount', 'NL80ABNA0419499482');
  mockQueryParamMap.set('targetAccount', 'NL12ABNA0123456789');
  mockQueryParamMap.set('amount', '12.34');
  mockQueryParamMap.set('description', 'unit test');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransferComponent, MockTranslatePipe],
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
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParamMap: mockQueryParamMap,
            },
          },
        },
        {
          provide: TransferService,
          useClass: MockTransferService,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the number of source accounts equal to the number returned by customer service', () => {
    expect(component).toBeTruthy();
    expect(component.accounts.length).toBe(DUMMY_ACCOUNTS.length);
  });

  it('should pre-fill form values when present in the route', () => {
    expect(component).toBeTruthy();

    const form = component.transferForm;
    expect(form.get('source').value).toBe('NL80ABNA0419499482');
    expect(form.get('target').value).toBe('NL12ABNA0123456789');
    expect(form.get('amount').value).toBe('12.34');
    expect(form.get('description').value).toBe('unit test');
  });

  it('should have a payment reference given a successful transfer', () => {
    expect(component).toBeTruthy();

    component.transfer();
    expect(component.createdPaymentReference).toBe('payment-reference');
  });
});
