import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})

export class PageComponent implements OnInit {

  @Input() articleCourant;

  public logoEntrer:string[] = [
    "/assets/logo_angular.png",
    "/assets/logo_debian.png",
    "/assets/logo_dollibarr.png",
    "/assets/logo_langage_web.png",
    "/assets/logo_lumen.png",
    "/assets/logo_moodle.png",
    "/assets/logo_mysql.png",
    "/assets/logo_node_js.png",
    "/assets/logo_php.png",
    "/assets/logo_prestashop.png",
    "/assets/logo_wordpress.png",
  ]
    
  ;

  constructor() {

  }

  ngOnInit() {
  }

}
