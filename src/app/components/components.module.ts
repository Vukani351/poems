import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoemModule } from './poem/poem.module'
import { SearchResultsModule } from './search-results/search-result.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [PoemModule, SearchResultsModule]
})

export class ComponentsModule { }