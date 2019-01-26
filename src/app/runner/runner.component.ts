import { Component, OnInit } from '@angular/core';
import { faRunning, faFlagCheckered } from '@fortawesome/free-solid-svg-icons';
import {Observable} from 'rxjs';

import {ScoreService} from '../score.service';



@Component({
  selector: 'app-runner',
  templateUrl: './runner.component.html',
  styleUrls: ['./runner.component.css']
})

//The idea is for the runner icon to run to the flag. The runner will get bigger as he get closer to the flag.
export class RunnerComponent implements OnInit {
  faRunning = faRunning;
  faFlagCheckered = faFlagCheckered;

  questionsAnswered = 0; //used on the left side of the header component, it shows how many questions haved been answered

  showRunner1 = false;
  showRunner2 = false;
  showRunner3 = false;
  showRunner4 = false;
  showRunner5 = false;
  readyPlayer = true;

  constructor(public score: ScoreService) {}

  ngOnInit() {
      //This method async update the questionsAnswered variable with the Score servie questionsAnswer variable
      this.score.questionsAnswer.subscribe((value) => {
          this.questionsAnswered = value;
          this.checkRunnerStatus();
      }); 
      
      
  }

  checkRunnerStatus(){
      if(this.score.questionsAnswer.getValue() == 1){
          this.showRunner1 = true;
          this.readyPlayer = false;
      }else if(this.score.questionsAnswer.getValue() == 3){
          this.showRunner1 = false;
          this.showRunner2 = true;
      }else if(this.score.questionsAnswer.getValue() == 5){
          this.showRunner2 = false;
          this.showRunner3 = true;
      }else if(this.score.questionsAnswer.getValue() == 7){
          this.showRunner3 = false;
          this.showRunner4 = true;
      }else if(this.score.questionsAnswer.getValue() >= 9){
          this.showRunner4 = false;
          this.showRunner5 = true;
      }
  }

}
