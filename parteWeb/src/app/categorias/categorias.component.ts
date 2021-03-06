import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import {CategoriasProductosService} from "../../services/categorias-productos.service";
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router'; 

@Component({
  selector: 'app-productos',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  public categorias = [];
  public regionSeleccionada: string; 

  constructor(private router: Router,private activatedroute:ActivatedRoute,private categoriasServices: CategoriasProductosService) { 
    

  }

  ngOnInit(): void {
    /*this.activatedroute.paramMap.subscribe( param=>{
      this.regionSeleccionada = param.get("region");
      console.log(this.regionSeleccionada);
    })*/
    this.regionSeleccionada = this.activatedroute.snapshot.paramMap.get("region");
    this.getCategorias();
  }

  getCategorias(): void {
    this.categoriasServices.getCategoriasProductos(this.regionSeleccionada).subscribe((categoriaSnapshot) => {
      this.categorias = [];
      console.log('hola')
      categoriaSnapshot.forEach((categoria: any) => {
          this.categorias.push({
              id: categoria.payload.doc.id,
              nombre: categoria.payload.doc.data().Nombre,
              region: categoria.payload.doc.data().Region,
              imagen: categoria.payload.doc.data().img,
              

          });
      });console.log(this.categorias);
      
  }) 

  }
  goLocales(categoriaSeleccionada: string): void{
    this.router.navigate(['/', 'locales',{region:this.regionSeleccionada,categoria:categoriaSeleccionada}]);
  }
}
