import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Menu } from './menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  menuClicked: string;

  menus: any = [
    { "id": "1", "name": "Accueil" },
    { "id": "2", "name": "Prestation" },
    { "id": "3", "name": "Technologie" },
    { "id": "4", "name": "Contact" },
  ];

  @Output() sendRecord: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  onSelectMenu(menu) {
    this.menuClicked = menu;//récupération du menu qu'on a cliquer
  }

  selectMenuEvent() {
    this.sendRecord.emit(this.menuClicked);
  }
  ngOnInit() {
  }

}

