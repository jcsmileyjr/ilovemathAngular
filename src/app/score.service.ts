//Tips on using BehaviorSubjects @ https://thinkster.io/tutorials/learn-rxjs-observables/using-behaviorsubject-for-values-that-change-over-time

//Tips for routing @ https://alligator.io/angular/navigation-routerlink-navigate-navigatebyurl/

import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs'; 
import { Router } from '@angular/router'; //needed for routing imperatively in your components. You must also add code to the constructor. 


@Injectable({
  providedIn: 'root'
})
export class ScoreService {
    
  questionsAnswer = new BehaviorSubject(0); //initate a shared variable to be displayed in the header component to show the user how many questions have been answered.
  currentScore = new BehaviorSubject(100);  //initate a shared variable to be displayed in the header component to show the user current score

  currentCorrect = 0; //initate a varible use to accumlate the number of correctly answered questions
  currentCount; //initate a varible use to accumulate the number of questions answered.
  calculateScore;//used to display the current score

  constructor(private router: Router) { }

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
      
      this.endGame();
  }

  //Method to route the user to a Final Score review page via routing after 10 games. This is call in the Score service's updateScore method
  endGame(){
    if(this.currentCount >= 10){
        this.router.navigateByUrl('/final');
    }
  }

  resetGame(){
      this.questionsAnswer.next(0);
      this.currentScore.next(100);
      this.currentCorrect = 0;
      this.currentCount = 0;
  }
}
