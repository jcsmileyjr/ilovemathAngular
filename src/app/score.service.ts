import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  questionsAnswer = 1;
  currentScore = 100;
  constructor() { }

  getCurrentCountQuestionsAnswered(){
      return this.questionsAnswer;
  }

  updateCurrentCountQuestionsAnswered(){
      this.questionsAnswer += 1;
      console.log("Score:Current question answer updated " + this.questionsAnswer);
  }
}
