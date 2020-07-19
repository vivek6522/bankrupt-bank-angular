import { Pipe, PipeTransform } from '@angular/core';

const translations = new Map<string, string>();
translations.set('some.code', 'Some code');

@Pipe({ name: 'translate' })
export class MockTranslatePipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    return translations.get(value);
  }
}
