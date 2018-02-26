import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentsComponent } from './documents.component';
import { DocumentsIndexComponent } from './documents-index/documents-index.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentsComponent,
    children: [
      {
        path: '',
        component: DocumentsIndexComponent,
        data: { title: 'Documents index' },
        pathMatch: 'full'
      },
      {
        path: 'pipes',
        component: PipesComponent,
        data: { title: 'Pipes' },
        pathMatch: 'full'
      },
      {
        path: 'forms',
        component: FormsComponent,
        data: { title: 'Forms' },
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule { }
