import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeHomeComponent } from './home-home/home-home.component';

const routes: Routes = [
  { path: 'home', component: HomeHomeComponent },
  { path: '' , redirectTo:'/login', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
