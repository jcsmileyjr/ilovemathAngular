import { Component, OnInit } from '@angular/core';

//To get Angular Font Awesome to work I had to npm individuly (instead of yarn) the three files. Use this style command: npm i @fortawesome/angular-fontawesome.
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'App-Title',
  templateUrl: './app-title.component.html',
  styleUrls: ['./app-title.component.css']
})
export class AppTitleComponent implements OnInit {
    
  faHeart = faHeart;    

  constructor() { }

  ngOnInit() {
  }

}
