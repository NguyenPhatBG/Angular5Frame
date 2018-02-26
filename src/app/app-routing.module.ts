import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppConfig } from './config/app.config';
import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './views/products/products.component';
import { AboutComponent } from './views/about/about.component';
import { Error404Component } from './views/error404/error404.component';

const routes: Routes = [
  { path: AppConfig.routes.home, component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'product', component: ProductsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', loadChildren: 'app/views/contacts/contacts.module#ContactsModule' },
  { path: 'document', loadChildren: 'app/views/documents/documents.module#DocumentsModule' },
  { path: AppConfig.routes.error404, component: Error404Component },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
