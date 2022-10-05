import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousand'
})

export class CurrencyPipe implements PipeTransform {
  static transform(value: string): any {
    throw new Error('Method not implemented.');
  }
  transform(value: any, digits?: string): string {
    if (value) {
      let thousands = value.split(',');
      thousands = thousands.join('.');
      return thousands
    }
    return '';
  }
}