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

         //set a property that holds a random color for our style.
         randomcolor = this.getRandomColor();
         
             //function to get random colors
             public getRandomColor() {
                 var letters = '0123456789ABCDEF'.split('');
                 var color = '#';
                 for (var i = 0; i < 6; i++){
                     color += letters[Math.floor(Math.random() * 16)];
                 }
                 return color;
             }
         
             //function to set a new random color
             setColor() {
               console.log("color");
                 this.randomcolor = this.getRandomColor();
             }

             
  ngOnInit() {
  }

}

