import { Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductosService} from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {

  constructor(public activatedRoute:ActivatedRoute,public _ps:ProductosService) {

this.activatedRoute.params.subscribe(parametros=>{
  console.log(parametros.termino);
  this._ps.buscar_producto(parametros.termino);
})

   }


}
