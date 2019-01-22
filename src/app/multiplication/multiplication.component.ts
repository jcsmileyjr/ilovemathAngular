import { Component, OnInit } from '@angular/core';

import { CalculateService } from '../calculate.service';
import {ScoreService} from '../score.service';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent implements OnInit {

  constructor(private calculate: CalculateService, private score: ScoreService) { }

  ngOnInit() {
      this.calculate.updateOperatorTitle("Multiplication");
      this.score.resetGame();
  }

}
