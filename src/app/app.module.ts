import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpModule} from "@angular/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioItemComponent } from './components/portfolio-item/portfolio-item.component';

import {APP_ROUTING} from './app.routes';

//servicios

import {InformacionService} from './services/informacion.service';
import {ProductosService} from './services/productos.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    PortfolioItemComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpModule
  ],
  providers: [InformacionService,ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
