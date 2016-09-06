import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customfilter'
})
export class CustomfilterPipe implements PipeTransform {

  transform(items: any, term: any): any {
    if (!term) {
      return items;
    }
    term = term.toLowerCase();
    return items.filter(item =>
      // item.key.toLowerCase().indexOf(term) !== -1 ||
    );
  }
}
