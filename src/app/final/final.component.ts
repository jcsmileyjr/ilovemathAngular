import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Router } from '@angular/router'; //needed for routing imperatively in your components. You must also add code to the constructor. 

import {ScoreService} from '../score.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  userScore = 0; // it shows the current score.  

  constructor(public score: ScoreService, private router: Router) { }

  ngOnInit() {
      //This method async update the score variable with the Score servie currentScore variable
      this.score.currentScore.subscribe((value) => {
          this.userScore = value;
      });      
  }

  newGame(){
      this.router.navigateByUrl('/home');
  }

}
