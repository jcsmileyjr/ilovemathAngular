import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

import {ScoreService} from '../score.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  questionsAnswered = 0;
    
  constructor(public score: ScoreService) {
    
  }

  updateProgress(){[
      this.questionsAnswered = this.score.getCurrentCountQuestionsAnswered();
      
  ]}

  ngOnInit() {
      this.updateProgress();
  }

}
