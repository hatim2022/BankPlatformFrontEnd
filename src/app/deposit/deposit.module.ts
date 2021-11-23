import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepositRoutingModule } from './deposit-routing.module';
import { DepositHomeComponent } from './deposit-home/deposit-home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [DepositHomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    DepositRoutingModule,
    HttpClientModule
  ]
})
export class DepositModule { }
