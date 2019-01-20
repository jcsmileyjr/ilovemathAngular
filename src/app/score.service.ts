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
}
