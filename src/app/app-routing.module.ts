import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdditionComponent } from './addition/addition.component';

import { AppTitleComponent } from './app-title/app-title.component';

const routes: Routes = [
    {path:'addition', component:AdditionComponent},
    {path:'',redirectTo:'/test', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
