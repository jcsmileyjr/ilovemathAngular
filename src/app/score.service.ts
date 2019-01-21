//Tips on using BehaviorSubjects @ https://thinkster.io/tutorials/learn-rxjs-observables/using-behaviorsubject-for-values-that-change-over-time

import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
    
  questionsAnswer = new BehaviorSubject(1); //initate a shared variable to be displayed in the header component to show the user how many questions have been answered.
  currentScore = new BehaviorSubject(100);  //initate a shared variable to be displayed in the header component to show the user current score

  currentCorrect = 1; //initate a varible use to accumlate the number of correctly answered questions
  currentCount; //initate a varible use to accumulate the number of questions answered.
  calculateScore;//used to display the current score

  constructor() { }

  //called in the equation component to update the number of questions answered
  updateCurrentCountQuestionsAnswered(){
      this.currentCount = this.questionsAnswer.getValue() + 1;//get the current count of questions answered and add 1 to the accumulater
      this.questionsAnswer.next(this.currentCount); //update the current count of questions answered with the accumulater
  }

  //called in the equation component ot update the score
  updateScore(trueFalse){
      if(trueFalse == true){
          this.currentCorrect += 1; //add one to the number of correct answers
          this.calculateScore = Math.ceil((this.currentCorrect/this.questionsAnswer.getValue())*100);
          this.currentScore.next(this.calculateScore);
      }else{
          this.calculateScore = Math.ceil((this.currentCorrect/this.questionsAnswer.getValue())*100);
          this.currentScore.next(this.calculateScore);
      }
  }
}
