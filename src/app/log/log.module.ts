import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogRoutingModule } from './log-routing.module';
import { LogHomeComponent } from './log-home/log-home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [LogHomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    LogRoutingModule,
    HttpClientModule
  ]
})
export class LogModule { }
