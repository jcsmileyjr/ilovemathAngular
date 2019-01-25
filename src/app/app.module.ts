import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';//NgModel lives here

//Tips @ https://www.npmjs.com/package/@fortawesome/angular-fontawesome
//To get Angular Font Awesome to work I had to npm individuly (instead of yarn) the three files. Use this style command: npm i @fortawesome/angular-fontawesome. 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    AppRoutingModule,
    FontAwesomeModule,
    FontAwesomeModule
  ],
  providers: [CalculateService, ScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
