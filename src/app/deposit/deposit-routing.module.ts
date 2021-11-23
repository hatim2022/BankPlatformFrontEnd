import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepositHomeComponent } from './deposit-home/deposit-home.component';

const routes: Routes = [
  { path:"deposit",component:DepositHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepositRoutingModule { }
