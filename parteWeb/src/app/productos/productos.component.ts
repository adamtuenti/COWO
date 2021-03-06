import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import {CategoriasProductosService} from "../../services/categorias-productos.service";
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public categorias = [];

  constructor(private categoriasServices: CategoriasProductosService) { }

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias(): void {
    this.categoriasServices.getCategoriasProductos().subscribe((categoriaSnapshot) => {
      this.categorias = [];
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
}
