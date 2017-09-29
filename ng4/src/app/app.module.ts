import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TeteComponent } from './tete/tete.component';
import { BurgerComponent } from './tete/burger/burger.component';
import { BanniereComponent } from './tete/banniere/banniere.component';
import { LogoComponent } from './tete/logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { PageComponent } from './page/page.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    TeteComponent,
    BurgerComponent,
    BanniereComponent,
    LogoComponent,
    MenuComponent,
    PageComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
