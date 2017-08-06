import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-list-drop',
  templateUrl: './list-drop.component.html',
  styleUrls: ['./list-drop.component.css']
})
export class ListDropComponent implements OnInit {

  textModel:string;

  constructor() { }

  ngOnInit() {
    this.textModel = 'Yea i can set input';
  }

}
