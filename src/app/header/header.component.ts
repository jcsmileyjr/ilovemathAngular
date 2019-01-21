import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

import {ScoreService} from '../score.service';
import { CalculateService } from '../calculate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  questionsAnswered = 0; //used on the left side of the header component, it shows how many questions haved been answered
  userScore = 0; // used on the right side of the header component, it shows the current score.
  pageTitle = "";//used to intitate a varible for the page title
    
  constructor(public score: ScoreService, private calculate: CalculateService) {
    
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
      
      //when the page load, the page title is updated depending on the type
      this.pageTitle = this.calculate.getOperatorTitle();
  }

}
