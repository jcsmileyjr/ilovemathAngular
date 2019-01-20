import { Component, OnInit } from '@angular/core';

import { CalculateService } from '../calculate.service';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
  topLine = 0;
  constructor(private calculate: CalculateService) {
    this.topLine = calculate.getTopLine();
  }

  ngOnInit() {
      
  }

  
}
