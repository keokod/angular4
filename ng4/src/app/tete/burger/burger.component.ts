import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})


export class BurgerComponent implements OnInit {

  isBurger: boolean = false;
  constructor() { 
  }

  activeBurger(){
    this.isBurger === false  ? this.isBurger = true :this.isBurger =false;
    console.log(this.isBurger);
  }
  ngOnInit() {
  }

}
