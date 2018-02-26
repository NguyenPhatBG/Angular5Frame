import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactNewComponent } from './contact-new/contact-new.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactsIndexComponent } from './contacts-index/contacts-index.component';
import { ContactsComponent } from './contacts.component';


const contactRoutes: Routes = [
  {
    path: '',
    component: ContactsComponent,
    children: [
      {
        path: '',
        component: ContactsIndexComponent,
        data: { title: 'Contacts index' },
        pathMatch: 'full'
      },
      {
        path: 'new',
        component: ContactNewComponent,
        data: { title: 'New contact' },
        pathMatch: 'full'
      },
      {
        path: ':contactId',
        component: ContactDetailsComponent,
        data: { title: 'Contact details' },
        pathMatch: 'full'
      },
      {
        path: ':contactId/edit',
        component: ContactEditComponent,
        data: { title: 'Edit contact' },
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(contactRoutes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
