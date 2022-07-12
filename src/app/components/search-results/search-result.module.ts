import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchResultsComponent } from './search-results.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [SearchResultsComponent],
    exports: [SearchResultsComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SearchResultsModule { }
