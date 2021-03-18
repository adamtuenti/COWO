import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalesService } from 'src/services/locales.service';

@Component({
  selector: 'app-locales',
  templateUrl: './locales.component.html',
  styleUrls: ['./locales.component.css']
})
export class LocalesComponent implements OnInit {

  public locales = [];
  public regionSeleccionada: string; 
  public categoriaSeleccionada: string; 
  localesVacios = false;

  constructor(private router: Router, private activatedroute:ActivatedRoute,private localesServices: LocalesService) { 
    

  }

  ngOnInit(): void {
    /*this.activatedroute.paramMap.subscribe( param=>{
      this.categoriaSeleccionada = param.get("region");
      console.log(this.categoriaSeleccionada);
    })*/
    this.regionSeleccionada = this.activatedroute.snapshot.paramMap.get("region");
    this.categoriaSeleccionada = this.activatedroute.snapshot.paramMap.get("categoria");
    this.getlocales();
  }

  getlocales(): void {
    this.localesServices.getLocales(this.categoriaSeleccionada, this.regionSeleccionada).subscribe((localesnapshot) => {
      this.locales = [];
      localesnapshot.forEach((categoria: any) => {
          this.locales.push({
              id: categoria.payload.doc.id,
              nombre: categoria.payload.doc.data().Nombre,
              region: categoria.payload.doc.data().Region,
              imagen: categoria.payload.doc.data().Imagen,
              

          });
          
      });
      console.log(this.locales.length)
      if(this.locales.length == 0){
        this.localesVacios = true;
      }else{
        this.localesVacios = false;
      }
      
  })
  

  }

  goProductos(localSeleccionado: string): void{
    console.log("hola");
    this.router.navigate(['/', 'productos',{local:localSeleccionado}]);
  }

}
