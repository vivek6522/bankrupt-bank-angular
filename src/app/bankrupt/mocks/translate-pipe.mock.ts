import { Pipe, PipeTransform } from '@angular/core';

const translations = new Map<string, string>();
translations.set('some.code', 'Some code');

@Pipe({ name: 'translate' })
export class MockTranslatePipe implements PipeTransform {
  transform(value: string, ...args: string[]) {
    return translations.get(value);
  }
}
