import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  currentOperatorTitle;//initate a varible that will hold the current page type to be use for calculations
  currentOperator; //initate a varible that hold current operator type. Updated when the page is loaded and in the updateOperatorTitle()
  currentTopLine = 0; //initate equation top line variable
  currentBottomLine = 1; //initate equation bottom line variable
  current = 0; //initate temp variable used to check if the currentTopLine is the previous currentTopLine
  correctAnswer = 0;  //initate varible for correct answer to current equation  

  constructor() { }

  //get a random number that is not the previous number
  checkIfTopNumberIsPreviousNumber(){
      this.current = this.currentTopLine;
      this.currentTopLine = Math.floor(Math.random()*11);
      if(this.current == this.currentTopLine){
          this.currentTopLine = Math.floor(Math.random()*11);
      }      
  }
    
  //called in the Equation component when the user press the submit button or press the enter key. This also check to make sure the same number isn't chosen twice in a row
  getRandomTopLineNumber(){
      this.checkIfTopNumberIsPreviousNumber();
      return this.currentTopLine;
  }

  //get a random number that is not the previous number
  checkIfBottomNumberIsPreviousNumber(){
        this.current = this.currentBottomLine;
        this.currentBottomLine = Math.floor(Math.random()*6);
        if(this.current == this.currentBottomLine){
          this.currentBottomLine = Math.floor(Math.random()*6);
        }        
  }

  //Check if the top number is higher then the bottom number. If it is, then a new random bottom number is drawn until its lower then the top number. 
  checkIfTopNumberIsHigherThenBottomNumber(){      
      while(this.currentTopLine < this.currentBottomLine){                   
          this.checkIfBottomNumberIsPreviousNumber();        
      }
  }

  //called in the Equation component when the user press the submit button or press the enter key. This also check to make sure the same number isn't chosen twice in a row.
  getRandomBottomLineNumber(){
      //This "if statement" is use to make sure the division page always divide by one
      if(this.currentOperator == "/" || this.currentOperatorTitle=="Division"){
          this.currentBottomLine = 1
          return this.currentBottomLine;
      }else {
          this.checkIfBottomNumberIsPreviousNumber();//get a random number that is not the previous number
          
          this.checkIfTopNumberIsHigherThenBottomNumber();//check to make sure there is no negative number answers      
          return this.currentBottomLine;          
      }

  }

  //method called inside each page onInit to update the page title on the header component
  updateOperatorTitle(page){
      this.currentOperatorTitle = page;      
      if(page=="Addition"){
          this.currentOperator = "+";
      }else if(page == "Subtraction"){
          this.currentOperator = "-";
      }else if(page == "Multiplication"){
          this.currentOperator = "x";
      }else{
          this.currentOperator = "/";
      }
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
          this.correctAnswer = this.currentTopLine + this.currentBottomLine;
          if(this.correctAnswer == userAnwer){
              return true;
          }else{
              return false;
          }
      }else if(this.currentOperatorTitle =="Subtraction"){
          this.correctAnswer = this.currentTopLine - this.currentBottomLine;
          if(this.correctAnswer == userAnwer){
              return true;
          }else{
              return false;
          }
      }else if(this.currentOperatorTitle =="Multiplication"){
          this.correctAnswer = this.currentTopLine * this.currentBottomLine;
          if(this.correctAnswer == userAnwer){
              return true;
          }else{
              return false;
          }  
      }else {
          this.correctAnswer = this.currentTopLine / 1;
            if(this.correctAnswer == userAnwer){
              return true;
            }else{
              return false;
            }    
      } 
  }//end of checkUserAnswer method

  
}
