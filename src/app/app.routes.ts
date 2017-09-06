import { RouterModule, Routes } from '@angular/router';
import {AboutComponent,PortafolioComponent,PortfolioItemComponent,SearchComponent} from './components/index.paginas';

const APP_ROUTES: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'producto/:id', component: PortfolioItemComponent },
  { path: 'about', component: AboutComponent },
  { path: 'buscar/:termino', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
