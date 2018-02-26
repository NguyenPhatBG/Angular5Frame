import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// Module
import { ContactsModule } from './views/contacts/contacts.module';
import { DocumentsModule } from './views/documents/documents.module';
import { SharedModule } from './shared/modules/shared.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { Error404Component } from './views/error404/error404.component';
import { FooterComponent } from './views/footer/footer.component';
import { NavComponent } from './views/nav/nav.component';
import { SearchBarComponent } from './views/search-bar/search-bar.component';
import { AboutComponent } from './views/about/about.component';
import { ProductsComponent } from './views/products/products.component';
import { HttpLoaderFactory } from './app.translate.factory';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
    NavComponent,
    FooterComponent,
    SearchBarComponent,
    AboutComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContactsModule,
    DocumentsModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
