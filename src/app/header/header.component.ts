import { Component, OnInit } from '@angular/core';

import {ScoreService} from '../score.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private score: ScoreService) { }

  ngOnInit() {
      
  }

}
