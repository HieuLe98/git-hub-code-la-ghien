import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'check'
})
export class CheckPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    if (value) {
      return 'checked'
    }
    return '';
  }

}
