import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BankruptComponent } from './bankrupt.component';
import { AuthService } from './services/auth.service';

describe('BankruptComponent', () => {
  let component: BankruptComponent;
  let fixture: ComponentFixture<BankruptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BankruptComponent],
      imports: [RouterTestingModule.withRoutes([])],
      providers: [
        {
          provide: AuthService,
          useValue: {},
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankruptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
