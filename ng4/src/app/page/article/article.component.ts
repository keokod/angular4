import { Component, OnInit } from '@angular/core';

export class Article {
  id: number;
  name: string;
}

const ARTICLES: Article[] = [
  { id: 1, name: 'Mon Activité' },
  { id: 2, name: 'Mes Services' },
  { id: 1, name: 'Technologie utilisé' },
  { id: 1, name: 'Contactez-moi' },
]


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
  articles: Article[] = ARTICLES;
  couleur: any = {'background': 'green'};

  changeCouleur() {
    console.log("changer couleur");
    this.couleur = {'background': 'blue'};
  }

  color() {
    return this.couleur;
  }


  constructor() { }

  ngOnInit() {
  }

}

