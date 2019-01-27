import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: RegisterComponent, pathMatch: 'full'},
    ]),
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class RegisterModule {

}