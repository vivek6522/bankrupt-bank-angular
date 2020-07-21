import { Component, OnInit, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-form-validation-messages',
  templateUrl: './form-validation-messages.component.html',
  styleUrls: ['./form-validation-messages.component.scss'],
})
export class FormValidationMessagesComponent implements OnInit {
  private static readonly ERROR_MESSAGES: any = {
    required: 'validation.required',
    pattern: 'validation.pattern',
    atleastOne: 'validation.atleastOne',
  };

  @Input()
  control: AbstractControlDirective | AbstractControl;
  @Input()
  params: Map<string, string>;

  constructor(private readonly translateService: TranslateService) {}

  ngOnInit(): void {}

  get shouldShowErrors(): boolean {
    return (
      this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched)
    );
  }

  listOfErrors(): string[] {
    const messages: string[] = [];
    Object.keys(this.control.errors).forEach((type) =>
      this.translateService
        .get(FormValidationMessagesComponent.ERROR_MESSAGES[type], this.params)
        .subscribe((message) => messages.push(message))
    );
    return messages;
  }
}
