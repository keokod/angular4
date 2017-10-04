import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
 
@Injectable()

export class HtmlService{
    menuCliked:string = 'accueil'; 

    constructor(){
        console.log("menu cliqué ="+this.menuCliked);
    }

    public setMenuCliked(menu:string){
        console.log("on a cliqué sur ***** =" + menu)

    }
    public getMenuCliked(){
        return this.menuCliked;
    }
}