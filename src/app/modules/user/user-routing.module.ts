import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  // { path: 'login', component: LoginComponent },
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: '**', redirectTo: 'login', pathMatch: 'full' }
  // {
  //   path: 'login',
  //   loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  // },
  // {
  //   path: 'register',
  //   loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  // },
  // {
  //   path: 'forgot-password',
  //   loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
  // },
  // {
  //   path: 'reset-password',
  //   loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordModule)
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
