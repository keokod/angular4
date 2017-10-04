import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Menu } from './menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  menus: Menu[];


  constructor( ) { 

  }

  ngOnInit() {
  }

}

