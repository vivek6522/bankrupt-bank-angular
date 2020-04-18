import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankruptHomeComponent } from './bankrupt-home.component';

describe('BankruptHomeComponent', () => {
  let component: BankruptHomeComponent;
  let fixture: ComponentFixture<BankruptHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankruptHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankruptHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
