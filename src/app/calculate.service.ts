import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  currentOperator;//initate a varible that will hold the current page type to be use for calculations
  currentTopLine = 0; //initate equation top line variable
  current = 0; //initate temp variable used to check if the currentTopLine is the previous currentTopLine
  correctAnswer = 0;  //initate varible for correct answer to current equation  
  constructor() { }
    
  getRandomTopLineNumber(){
      this.current = this.currentTopLine;
      this.currentTopLine = Math.floor(Math.random()*11);
      if(this.current == this.currentTopLine){
          this.currentTopLine = Math.floor(Math.random()*11);
      }
      return this.currentTopLine;
  }

  updateOperator(page){
      this.currentOperator = page;
      console.log(this.currentOperator);
  }

  //Used the type of operator to decide which equation to use
  checkUserAnswer(userAnwer){
      if(this.currentOperator == "Addition"){
          this.correctAnswer = this.currentTopLine + 1;
          if(this.correctAnswer == userAnwer){
              return true;
          }else{
              return false;
          }
      }else if(this.currentOperator =="Subtraction"){
        console.log("Subtraction in progress");
      }else if(this.currentOperator=="Multiplication"){
        console.log("Multiplication in progress");  
      }else {
        console.log("Division in progress");  
      } 
  }//end of checkUserAnswer method

  
}
