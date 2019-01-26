//Tips on using ng-if @ https://malcoded.com/posts/angular-ngif-else

import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Router } from '@angular/router'; //needed for routing imperatively in your components. You must also add code to the constructor. 
import { faFlagCheckered, faTrophy } from '@fortawesome/free-solid-svg-icons';

import {ScoreService} from '../score.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  userScore = 0; // it shows the current score.  

  faFlagCheckered = faFlagCheckered;
  faTrophy = faTrophy;
  passFail = true;

  constructor(public score: ScoreService, private router: Router) { }

  ngOnInit() {
      //This method async update the score variable with the Score servie currentScore variable
      this.score.currentScore.subscribe((value) => {
          this.userScore = value;
      }); 
      
      this.showPassFailFlags();
  }

  newGame(){
      this.router.navigateByUrl('/home');
  }

  showPassFailFlags(){
      if(this.userScore >= 70 ){
          this.passFail = true;
      }else{
          this.passFail = false;
      }
  }

}

//The idea is for a icon runner to run across the screen to a black and white checkered flag (far right side of screen).
//It would be great for a animated dust cloud to be behind the player or something to show movement.
//On the home page allow the playter to type in his name and favorite color. The runner icon can be that color and the player name used throughout app.
