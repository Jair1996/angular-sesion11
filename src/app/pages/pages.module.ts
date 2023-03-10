import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  exports: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
