import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';

import { TransactionsHomeComponent } from './transactions-home/transactions-home.component';
import { FormsModule, NgForm } from '@angular/forms';


@NgModule({
  declarations: [TransactionsHomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    TransactionsRoutingModule
  ]
})
export class TransactionsModule { }
