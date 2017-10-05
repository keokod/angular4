import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Menu } from './menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  menus:any = [
    {"id":"1","name":"home"},
    {"id":"2","name":"service"},
  ];

  @Output("menuSelected") sendRecord:EventEmitter<any> = new EventEmitter();

  constructor( ) { 
  }

  selectMenuEvent(){
    console.log(this.menus)
    this.sendRecord.emit(this.menus);

  }
  ngOnInit() {
  }

}

