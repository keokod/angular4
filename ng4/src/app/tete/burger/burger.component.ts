import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})


export class BurgerComponent implements OnInit {

  constructor() {
  
    console.log();
  }

  burger(event: any) {
    let saClasse = event.target.classList;
    console.log(saClasse.length);
    if(saClasse.length == 1){
      event.target.classList.add('class3'); // To ADD
    }else{
      event.target.classList.remove('change'); // To Remove
    }
  }

  ngOnInit() {
  }

}
