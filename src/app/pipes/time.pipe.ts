import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totime'
})
export class TimePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): Date {
    let time = new Date();
    time.setTime(value);
    return time;
  }

}
