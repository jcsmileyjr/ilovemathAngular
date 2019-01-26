import { Component, OnInit } from '@angular/core';

import { CalculateService } from '../calculate.service';
import {ScoreService} from '../score.service';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {

  constructor(private calculate: CalculateService, private score: ScoreService) {
  } 

  ngOnInit() {
      this.calculate.updateOperatorTitle("Addition");
      this.score.resetGame();
  }

}
