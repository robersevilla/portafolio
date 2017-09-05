import { Injectable } from '@angular/core';
import {Http} from "@angular/http";


@Injectable()
export class ProductosService {

  productos:any[]=[];
  cargando_productos:boolean=false;


  constructor(public http:Http) {

this.cargar_productos();

   }

   public cargar_productos(){

     if(this.productos.length===0){

       this.http.get("https://paginaweb-fde42.firebaseio.com/productos_idx.json")
                .subscribe(data=>{
                  console.log(data.json());
                  this.cargando_productos=true;
                  this.productos=data.json();
                })

     }

   }

}
