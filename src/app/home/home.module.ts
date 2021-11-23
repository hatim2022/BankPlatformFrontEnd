import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeHomeComponent } from './home-home/home-home.component';



@NgModule({
  declarations: [HomeHomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    
   
  ]
})
export class HomeModule { }
