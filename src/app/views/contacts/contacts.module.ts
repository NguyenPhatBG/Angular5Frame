import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';

import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactNewComponent } from './contact-new/contact-new.component';
import { ContactsIndexComponent } from './contacts-index/contacts-index.component';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule
  ],
  declarations: [
    ContactsComponent,
    ContactDetailsComponent,
    ContactEditComponent,
    ContactNewComponent,
    ContactsIndexComponent
  ]
})
export class ContactsModule { }
