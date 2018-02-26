import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormatStrPipe } from './format-str.pipe';
import { FilterPipe } from './filter.pipe';
import { SortColPipe } from './sort-col.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FormatStrPipe, FilterPipe, SortColPipe],
  exports: [FormatStrPipe, FilterPipe, SortColPipe]
})
export class PipesModule { }
