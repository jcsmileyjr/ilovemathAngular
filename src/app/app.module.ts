import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';//NgModel lives here

//Application Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTitleComponent } from './app-title/app-title.component';
import { HeaderComponent } from './header/header.component';
import { EquationComponent } from './equation/equation.component';

//Pages
import { FooterComponent } from './footer/footer.component';
import { AdditionComponent } from './addition/addition.component';
import { HomeComponent } from './home/home.component';
import { SubtractionComponent } from './subtraction/subtraction.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { DivisionComponent } from './division/division.component';
import { FinalComponent } from './final/final.component';

//Services
import {CalculateService} from './calculate.service';
import {ScoreService} from './score.service';


@NgModule({
  declarations: [
    AppComponent,
    AppTitleComponent,
    HeaderComponent,
    EquationComponent,
    FooterComponent,
    AdditionComponent,
    HomeComponent,
    SubtractionComponent,
    MultiplicationComponent,
    DivisionComponent,
    FinalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //need to use ngModel
    AppRoutingModule
  ],
  providers: [CalculateService, ScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
