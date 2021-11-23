import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateHomeComponent } from './create-home/create-home.component';

const routes: Routes = [
  { path:"create",component:CreateHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoutingModule { }
