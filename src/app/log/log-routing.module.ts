import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogHomeComponent } from './log-home/log-home.component';

const routes: Routes = [
  { path:"log",component:LogHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogRoutingModule { }
