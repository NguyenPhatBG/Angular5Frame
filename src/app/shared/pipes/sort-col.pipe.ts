import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({
  name: 'sortCol'
})
export class SortColPipe implements PipeTransform {

  transform(products: any[], sortBy: string, sortValue: number): any {
    if (sortBy === 'id') {
      products = orderBy(products, ['id'], [sortValue === 1 ? 'asc' : 'desc']);
    }
    if (sortBy === 'name') {
      products = orderBy(products, ['name'], [sortValue === 1 ? 'asc' : 'desc']);
    }
    if (sortBy === 'price') {
      products = orderBy(products, ['price'], [sortValue === 1 ? 'asc' : 'desc']);
    }
    return products;
  }
}
