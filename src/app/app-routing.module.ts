import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdditionComponent } from './addition/addition.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path:'addition', component:AdditionComponent},
    {path:'home', component:HomeComponent},
    {path:'',redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
