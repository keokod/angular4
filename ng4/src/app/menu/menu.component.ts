import { Component, OnInit } from '@angular/core';

export class Menu{

  id:number;
  name:string;

}

const MENUS: Menu[] = [
  {id:1,name:'accueil'},
  {id:2,name:'Mes services'},
  {id:3,name:'Technologie utilisé'},
  {id:4,name:'Contactez-moi'},
]

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  menus:Menu[] = MENUS;

  constructor() { }

    changeMenu(menu){
      console.log("j'ai cliqué"+menu);
    }
             
  ngOnInit() {
  }

}

