import { Component, OnInit } from '@angular/core';

import { CalculateService } from '../calculate.service';
import {ScoreService} from '../score.service';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {

  constructor(private calculate: CalculateService, private score: ScoreService) { }

  ngOnInit() {
      this.calculate.updateOperatorTitle("Division");
      this.score.resetGame();
  }

}
