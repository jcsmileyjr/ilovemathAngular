import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  currentTopLine = 0; //initate equation top line variable
  correctAnswer = 0;  //initate varible for correct answer to current equation  
  constructor() { }
    
  getTopLine(){
      this.current = this.currentTopLine;
      this.currentTopLine = Math.floor(Math.random()*11);
      if(this.current == this.currentTopLine){
          this.currentTopLine = Math.floor(Math.random()*11);
      }
      return this.currentTopLine;
  }

  checkUserAnswer(operator, userAnwer){
      if(operator == "Addition"){
          this.correctAnswer = this.currentTopLine + 1;
          if(this.correctAnswer == userAnwer){
              console.log("True");
              return true;
          }else{
              console.log("False");
              return false;
          }
      }else if(operator =="Subtraction"){
        console.log("Subtraction in progress");
      }else if(operator=="Multiplication"){
        console.log("Multiplication in progress");  
      }else {
        console.log("Division in progress");  
      } 
  }//end of checkUserAnswer method

  
}
