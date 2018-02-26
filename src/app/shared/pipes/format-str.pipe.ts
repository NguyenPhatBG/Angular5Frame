import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatStr'
})
export class FormatStrPipe implements PipeTransform {

  transform(txtValue: string, start: number, end: number): any {
    return txtValue.substr(start, end) + ' ' + '...';
  }
}
