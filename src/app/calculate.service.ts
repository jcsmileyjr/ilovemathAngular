import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  currentTopLine = 10;
    
  constructor() { }
    
  getTopLine(){
      return this.currentTopLine;
  }

  
}
