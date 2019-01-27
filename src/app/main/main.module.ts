import { NgModule, OnInit } from '@angular/core';
import { MainComponent } from './main.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Normally I use the feed components in this module. 
// I call global header and foot from this one and change feed component by route...
@NgModule({
  declarations: [MainComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forChild([
        { path: '', component: MainComponent, pathMatch: 'full'}
      ])
  ]
})
export class MainModule {

}