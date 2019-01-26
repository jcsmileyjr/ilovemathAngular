import { Component, OnInit } from '@angular/core';

import { CalculateService } from '../calculate.service';
import {ScoreService} from '../score.service';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.css']
})
export class SubtractionComponent implements OnInit {

  constructor(private calculate: CalculateService, private score: ScoreService) { }

  ngOnInit() {
      this.calculate.updateOperatorTitle("Subtraction");
      this.score.resetGame();
  }

}
