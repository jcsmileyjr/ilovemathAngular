import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdditionComponent } from './addition/addition.component';
import { SubtractionComponent } from './subtraction/subtraction.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { DivisionComponent } from './division/division.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path:'addition', component:AdditionComponent},
    {path:'subtraction', component:SubtractionComponent},
    {path:'multiplication', component:MultiplicationComponent},
    {path:'division', component:DivisionComponent},     
    {path:'home', component:HomeComponent},
    {path:'',redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
