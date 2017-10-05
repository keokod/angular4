import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  @Input() articleCourant;
  
  constructor() {

  }
  setArticle(article: string) {

  }



  isShow() {
    return false;
  }

  isSelected(nameArticle) {
    console.log(nameArticle);
    return { 'background': 'green' };
  }
  ngOnInit() {
  }

}
