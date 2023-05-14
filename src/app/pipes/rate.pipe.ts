import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rate'
})
export class RatePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return value>0?'exist'.toLowerCase() :'out'.toUpperCase();
  }

}
