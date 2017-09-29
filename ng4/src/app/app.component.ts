import { Component,ElementRef} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isHideContact:boolean = true;

  public constructor(){
    console.log(ElementRef.length);
    this.pousseFooter();
  }

  pousseFooter(){
    console.log("---- FOOTER ---");


  }
}
