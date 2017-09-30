import { Component, OnInit } from '@angular/core';

export class Menu{

  id:number;
  name:string;

}

const MENUS: Menu[] = [
  {id:1,name:'mon activite'},
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

    choixArticle(menuId){
      console.log("j'ai cliqué"+menuId);
    }
             
  ngOnInit() {
  }

}

