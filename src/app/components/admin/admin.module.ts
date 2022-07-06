import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminFooterComponent } from './components/admin-footer/admin-footer.component';
import { AdminContactsComponent } from './components/admin-contacts/admin-contacts.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminContactComponent } from './components/admin-contact/admin-contact.component';


@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminContactsComponent,
    DashboardComponent,
    AdminContactComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
