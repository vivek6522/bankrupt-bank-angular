import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidationMessagesComponent } from './form-validation-messages.component';
import { TranslateService } from '@ngx-translate/core';
import { MockTranslateService } from '../../mocks/translate-service.mock';

describe('FormValidationMessagesComponent', () => {
  let component: FormValidationMessagesComponent;
  let fixture: ComponentFixture<FormValidationMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormValidationMessagesComponent],
      providers: [
        {
          provide: TranslateService,
          useClass: MockTranslateService,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidationMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
