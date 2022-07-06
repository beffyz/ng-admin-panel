import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminContactsComponent } from './components/admin-contacts/admin-contacts.component';
import { AdminContactComponent } from './components/admin-contact/admin-contact.component';
import { UserResolver } from './resolvers/user.resolver';
import { UsersResolver } from './resolvers/users.resolver';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'contacts',
        pathMatch: 'full',
      },
      {
        path: 'contacts',
        component: AdminContactsComponent,
        resolve: {
          users: UsersResolver,
        }
      },
      {
        path: 'contacts/user',
        redirectTo: 'contacts',
        pathMatch: 'full',
      },
      {
        path: 'contacts/user/:id',
        component: AdminContactComponent,
        resolve: {
          user: UserResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
