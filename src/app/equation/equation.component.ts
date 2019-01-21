import { Component, OnInit } from '@angular/core';

import { CalculateService } from '../calculate.service';
import {ScoreService} from '../score.service';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
  topLine = 0; //the random generated number on the top line of the equation
  
  userAnswer ; //the user inputed answer

  constructor(private calculate: CalculateService, public score:ScoreService) {

    this.topLine = calculate.getRandomTopLineNumber();//when the app starts a random number is generated and shown
  }

  //method called by the equation componet's submit button. If the user type in a valid answer (not undefined) then it use the Calculate's service to check the user answer and move to the next random number.
  //update the score, update the percentage completed, and move to the next random number.
  onSubmitClick(){
    if(typeof this.userAnswer !== "undefined"){
      this.calculate.checkUserAnswer("Addition", this.userAnswer);//Calculate and check the score
      this.topLine = this.calculate.getRandomTopLineNumber(); //Get the next random number
      this.score.updateCurrentCountQuestionsAnswered();//Use to add 1 to the current number of questions answer that is displayed on the header component.
        
    }else {
        console.log("THE USER IS CRAZY");
    }  

  }

  ngOnInit() {
      
  }

  
}
