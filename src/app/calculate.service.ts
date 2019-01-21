import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  currentOperatorTitle;//initate a varible that will hold the current page type to be use for calculations
  currentOperator; //initate a varible that hold current operator type. Updated when the page is loaded and in the updateOperatorTitle()
  currentTopLine = 0; //initate equation top line variable
  current = 0; //initate temp variable used to check if the currentTopLine is the previous currentTopLine
  correctAnswer = 0;  //initate varible for correct answer to current equation  

  constructor() { }
    
  //call in the equation component when the user press the submit button or press the enter key. This also check to make sure the same number isn't chosen twice in a row
  getRandomTopLineNumber(){
      this.current = this.currentTopLine;
      this.currentTopLine = Math.floor(Math.random()*11);
      if(this.current == this.currentTopLine){
          this.currentTopLine = Math.floor(Math.random()*11);
      }
      return this.currentTopLine;
  }

  //method called inside each page onInit to update the page title on the header component
  updateOperatorTitle(page){
      this.currentOperatorTitle = page;
      
      if(page=="Addition"){
          this.currentOperator = "+";
      }else if(page == "Subtraction"){
          this.currentOperator = "-"
      }else{
          this.currentOperator = "x"
      }
      console.log(this.currentOperatorTitle + " and " + this.currentOperator);
  }

  //method call on header component to update current page title
  getOperatorTitle(){
      return this.currentOperatorTitle;
  }
 
  //method call on the equation component to update the current operator by page
  getOperator(){
      return this.currentOperator;
  }

  //Used the type of operator to decide which equation to use
  checkUserAnswer(userAnwer){
      if(this.currentOperatorTitle == "Addition"){
          this.correctAnswer = this.currentTopLine + 1;
          if(this.correctAnswer == userAnwer){
              return true;
          }else{
              return false;
          }
      }else if(this.currentOperatorTitle =="Subtraction"){
          this.correctAnswer = this.currentTopLine - 1;
          if(this.correctAnswer == userAnwer){
              return true;
          }else{
              return false;
          }
      }else if(this.currentOperatorTitle=="Multiplication"){
        console.log("Multiplication in progress");  
      }else {
        console.log("Division in progress");  
      } 
  }//end of checkUserAnswer method

  
}
