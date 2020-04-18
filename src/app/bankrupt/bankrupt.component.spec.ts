import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankruptComponent } from './bankrupt.component';

describe('BankruptComponent', () => {
  let component: BankruptComponent;
  let fixture: ComponentFixture<BankruptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BankruptComponent]
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
