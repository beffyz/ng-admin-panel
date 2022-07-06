import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    canActivate: [AuthenticationGuard],
    canDeactivate: [AuthenticationGuard],
    loadChildren: () =>
      import('./components/admin/admin.module').then(
        (module) => module.AdminModule
      ),
  },
  {
    path: '**',
    redirectTo: '404',
  },
  {
    path: '404',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
