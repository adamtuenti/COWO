import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public productos = [];
  public localSeleccionado: string; 

  constructor(private router: Router,private activatedroute:ActivatedRoute,private productosServices: ProductosService) { 
    

  }

  ngOnInit(): void {
    /*this.activatedroute.paramMap.subscribe( param=>{
      this.regionSeleccionada = param.get("region");
      console.log(this.regionSeleccionada);
    })*/
    this.localSeleccionado = this.activatedroute.snapshot.paramMap.get("local");
    this.getProductos();
  }

  getProductos(): void {
    this.productosServices.getProductos(this.localSeleccionado).subscribe((productosnapshot) => {
      this.productos = [];
      console.log('hola')
      productosnapshot.forEach((categoria: any) => {
          this.productos.push({
              id: categoria.payload.doc.id,
              nombre: categoria.payload.doc.data().Nombre,
              region: categoria.payload.doc.data().Region,
              imagen: categoria.payload.doc.data().img,
              

          });
      });console.log(this.productos);
      
  }) 

  }

  

}
