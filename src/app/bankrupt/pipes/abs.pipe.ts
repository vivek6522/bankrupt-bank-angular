import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abs'
})
export class AbsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): number {
    return Math.abs(parseInt(value, 10));
  }

}
