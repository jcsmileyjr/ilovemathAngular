import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

import {ScoreService} from '../score.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  questionsAnswered = 0; //used on the left side of the header component, it shows how many questions haved been answered
  userScore = 0; // used on the right side of the header component, it shows the current score.
    
  constructor(public score: ScoreService) {
    
  }

  ngOnInit() {
      
      //This method async update the questionsAnswered variable with the Score servie questionsAnswer variable
      this.score.questionsAnswer.subscribe((value) => {
          this.questionsAnswered = value;
      });
      
      //This method async update the score variable with the Score servie currentScore variable
      this.score.currentScore.subscribe((value) => {
          this.userScore = value;
      });      
  }

}
