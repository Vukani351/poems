import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoemModule } from './poem/poem.module'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [PoemModule]
})
export class ComponentsModule { }