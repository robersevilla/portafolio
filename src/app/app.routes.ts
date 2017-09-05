import { RouterModule, Routes } from '@angular/router';
import {AboutComponent,PortafolioComponent,PortfolioItemComponent} from './components/index.paginas';

const APP_ROUTES: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'producto', component: PortfolioItemComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
