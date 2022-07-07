import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PoemComponent } from './poem.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [PoemComponent],
    exports: [PoemComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PoemModule { }
