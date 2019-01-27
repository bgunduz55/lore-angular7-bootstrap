import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './authGuard';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: '*', loadChildren: './main/main.module#MainModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './login/login.module#LoginModule', canActivateChild: [AuthGuard] },
  { path: 'register', loadChildren: './register/register.module#RegisterModule', canActivateChild: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
