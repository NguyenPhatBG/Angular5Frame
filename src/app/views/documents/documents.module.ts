import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// import modules
import { PipesModule } from '../../shared/pipes/pipes.module';

// import components
import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentsComponent } from './documents.component';
import { DocumentsIndexComponent } from './documents-index/documents-index.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    PipesModule,
    FormsModule
  ],
  declarations: [DocumentsComponent, DocumentsIndexComponent, PipesComponent, FormsComponent]
})
export class DocumentsModule { }
