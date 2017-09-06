import { Injectable } from '@angular/core';
import {Http} from "@angular/http";


@Injectable()
export class ProductosService {

  productos:any[]=[];
  cargando:boolean=true;


  constructor(public http:Http) {

this.cargar_productos();

   }

   public cargar_productos(){
     this.cargando=true;

     if(this.productos.length===0){
       console.log(this.cargando);
       this.http.get("https://paginaweb-fde42.firebaseio.com/productos_idx.json")
                .subscribe(data=>{
                  console.log(data.json());
                  setTimeout(()=>{
                    this.cargando=false;
                    console.log(this.cargando);
                    this.productos=data.json();
                  },1500)

                })

     }

   }

}
