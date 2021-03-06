import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: LoginComponent, pathMatch: 'full'},
    ]),
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class LoginModule {

}