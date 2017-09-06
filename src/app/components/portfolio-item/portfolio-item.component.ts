import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Http} from "@angular/http";
@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styles: []
})
export class PortfolioItemComponent  {

detalle_producto:any={};
id_producto:string="";
  constructor(public activatedRoute:ActivatedRoute,public http:Http) {


    this.activatedRoute.params.subscribe(parametros=>{
      console.log(parametros.id);
      this.id_producto=parametros.id;
      let url="https://paginaweb-fde42.firebaseio.com/productos/"+parametros.id+".json";
      this.http.get(url).subscribe(data=>{
        this.detalle_producto=data.json();
      })

    })

   }


}
