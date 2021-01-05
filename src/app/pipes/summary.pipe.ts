import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string): string {
    if (!value)
      return null;

    return value.length >= 80 ? value.substr(0, 80) + '...' : value;
  }

}
