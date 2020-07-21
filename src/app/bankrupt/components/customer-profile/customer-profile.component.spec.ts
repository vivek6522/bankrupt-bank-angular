import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProfileComponent } from './customer-profile.component';
import { By } from '@angular/platform-browser';
import { MockTranslatePipe } from '../../mocks/translate-pipe.mock';

describe('CustomerProfileComponent', () => {
  let component: CustomerProfileComponent;
  let fixture: ComponentFixture<CustomerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerProfileComponent, MockTranslatePipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerProfileComponent);
    component = fixture.componentInstance;
    component.customer = {
      sub: 'id',
      name: 'Some Name',
      picture: 'https://link.to/picture.png'
    };
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
});
