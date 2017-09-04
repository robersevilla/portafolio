import { RouterModule, Routes } from '@angular/router';
import {AboutComponent,PortafolioComponent,PortfolioItemComponent} from './components/index.paginas';

const APP_ROUTES: Routes = [
  { path: 'portafolio', component: PortafolioComponent },
  { path: 'producto', component: PortfolioItemComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'portafolio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
