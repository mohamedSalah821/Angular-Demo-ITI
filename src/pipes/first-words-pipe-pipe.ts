import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstWordsPipe',
})
export class FirstWordsPipePipe implements PipeTransform {
  transform(value: string, count: number =3): string {
    if(!value) return '';
    return value.split(' ').slice(0,count).join(' ');
  }
}
