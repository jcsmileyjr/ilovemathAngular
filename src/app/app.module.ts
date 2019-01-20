import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';//NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTitleComponent } from './app-title/app-title.component';
import { HeaderComponent } from './header/header.component';
import { EquationComponent } from './equation/equation.component';
import { FooterComponent } from './footer/footer.component';
import { AdditionComponent } from './addition/addition.component';
import { HomeComponent } from './home/home.component';


import {CalculateService} from './calculate.service'

@NgModule({
  declarations: [
    AppComponent,
    AppTitleComponent,
    HeaderComponent,
    EquationComponent,
    FooterComponent,
    AdditionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //need to use ngModel
    AppRoutingModule
  ],
  providers: [CalculateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
