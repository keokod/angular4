import { Component,ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  article:string='accueil'; //article 0 = home
  isHideContact:boolean = true;


  public constructor(){

  }
  
  menuSelected(menu){
	console.log(menu);
  }
}
