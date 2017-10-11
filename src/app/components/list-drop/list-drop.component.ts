import { Component, OnInit } from '@angular/core';
import IFruits from '../../fixtures/fruits';

@Component({
  moduleId: module.id,
  selector: 'app-list-drop',
  templateUrl: 'list-drop.component.html',
  styleUrls: ['./list-drop.component.css']
})
export class ListDropComponent implements OnInit {

  items: IFruits[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        name: 'Яблоко',
        id: 1
      },
      {
        name: 'Апельсин',
        id: 2
      },
      {
        name: 'Персик',
        id: 3
      },
      {
        name: 'Нектарин',
        id: 4
      },
      {
        name: 'Груша',
        id: 5
      }
    ];
  }

}
