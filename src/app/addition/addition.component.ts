import { Component, OnInit } from '@angular/core';

import { CalculateService } from '../calculate.service';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {

  constructor(private calculate: CalculateService) {
  }
    
      

  ngOnInit() {
      this.calculate.updateOperator("Addition");
  }

}
