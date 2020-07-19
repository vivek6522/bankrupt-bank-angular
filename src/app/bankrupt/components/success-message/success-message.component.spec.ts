import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessMessageComponent } from './success-message.component';
import { MockTranslatePipe } from '../../mocks/translate-pipe.mock';

describe('SuccessMessageComponent', () => {
  let component: SuccessMessageComponent;
  let fixture: ComponentFixture<SuccessMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessMessageComponent, MockTranslatePipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessMessageComponent);
    component = fixture.componentInstance;
    component.translationCode = 'some.code';
    component.translationParams = undefined;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a translated message', () => {

    const p = fixture.nativeElement.querySelector('p');

    expect(p.textContent).toContain('Some code');
  });
});
