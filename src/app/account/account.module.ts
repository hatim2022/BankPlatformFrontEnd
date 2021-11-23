import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountHomeComponent } from './account-home/account-home.component';
import { AccountRoutingModule } from './account-routing-module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AccountHomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
