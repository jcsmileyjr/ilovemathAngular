//Tips on using BehaviorSubjects @ https://thinkster.io/tutorials/learn-rxjs-observables/using-behaviorsubject-for-values-that-change-over-time

import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
    
  questionsAnswer = new BehaviorSubject(1) //initate a shared variable

  currentCount; //initate a varible use to accumulate the number of questions answered.
  constructor() { }

  updateCurrentCountQuestionsAnswered(){
      this.currentCount = this.questionsAnswer.getValue() + 1;//get the current count of questions answered and add 1 to the accumulater
      this.questionsAnswer.next(this.currentCount); //update the current count of questions answered with the accumulater
  }
}
