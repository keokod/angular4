import { Component, OnInit, Input,ElementRef } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  @Input() articleCourant;
  @Input() ('artName') artName:string;
  isValid = false;

constructor() {

}
  setArticle(article:string){

  }

  getArticleCourant(){
    return true;
  }

    isSelected(nameArticle){
      console.log(nameArticle);
      return {'background':'green'} ;
    }
  ngOnInit() {
  }

}
