import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateHomeComponent } from './create-home/create-home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [CreateHomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    CreateRoutingModule,
    HttpClientModule
  ]
})
export class CreateModule { }
