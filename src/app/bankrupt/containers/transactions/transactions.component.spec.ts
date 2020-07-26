import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TransactionsComponent } from './transactions.component';
import { TransferService } from '../../services/transfer.service';
import { MockTransferService } from '../../services/transfer.mock';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { DUMMY_TRANSFERS } from '../../mocks/transfers.data';

describe('TransactionsComponent', () => {
  let component: TransactionsComponent;
  let fixture: ComponentFixture<TransactionsComponent>;

  const routeParams = new Map<string, string>();
  routeParams.set('sourceAccount', 'NL80ABNA0419499482');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionsComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [
        {
          provide: TransferService,
          useClass: MockTransferService,
        },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(routeParams),
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should construct correct link for transfer screen', () => {
    expect(component).toBeTruthy();

    expect(component.constructTransferLink(DUMMY_TRANSFERS[0])).toEqual(
      'transfer?targetAccount=NL80ABNA0419499482&sourceAccount=NL12ABNA0123456789&amount=1.23&description=Test transfer'
    );
  });
});
