import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TeteComponent } from './tete/tete.component';
import { BurgerComponent } from './tete/burger/burger.component';
import { BanniereComponent } from './tete/banniere/banniere.component';
import { LogoComponent } from './tete/logo/logo.component';
import { MenuComponent } from './tete/menu/menu.component';
import { PageComponent } from './tete/page/page.component';
import { FooterComponent } from './tete/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TeteComponent,
    BurgerComponent,
    BanniereComponent,
    LogoComponent,
    MenuComponent,
    PageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
