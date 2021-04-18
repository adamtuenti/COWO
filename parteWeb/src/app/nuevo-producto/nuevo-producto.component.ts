import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CategoriasProductosService } from 'src/services/categorias-productos.service';
import { LocalesService } from 'src/services/locales.service';


class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {
  regionSeleccionada:string;

  usrId = "Xgo6yE9xwnYCAsm4Tj6w";
  regiones = ['Costa','Sierra','Amazonía'];
  categorias = ['Seleccione una region'];
  locales = ['Seleccione una region'];
  usuario = "";
  myForm: FormGroup;
  nombre: FormControl;
  precio: FormControl;
  descripcion: FormControl;
  region: FormControl;
  categoria: FormControl;
  local: FormControl;
  imagen: FormControl;
  imagen2: FormControl;

  imageURL: string[] = ['',''] ;


  selectedFile: ImageSnippet;

  constructor(private categoriasServices: CategoriasProductosService, private localesServices: LocalesService) { }
  ngOnInit() {
    this.nombre = new FormControl();
    this.precio = new FormControl();
    this.descripcion = new FormControl();
    this.region = new FormControl();
    this.categoria = new FormControl();
    this.local = new FormControl();
    this.imagen = new FormControl();
    this.imagen2 = new FormControl();
    this.myForm = new FormGroup({
      'nombre': this.nombre,
      'precio' : this.precio,
      'region' : this.region,
      'descripcion': this.descripcion,
      'categoria': this.categoria,
      'local': this.local,
      'imagen': this.imagen,
      'imagen2': this.imagen2
    });
  }

  showPreview(event,i) {
    const file = (event.target as HTMLInputElement).files[0];
    this.myForm.patchValue({
      avatar: file
    });
    this.myForm.get('imagen').updateValueAndValidity()

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL[i] = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  seleccionRegion(r:string){
    
    if(r=="Amazonía") r="Amazonia";
    this.regionSeleccionada = r;

    this.categoriasServices.getCategoriasProductos(r).subscribe((categoriaSnapshot) => {
      this.categorias = [];
      //console.log('hola')
      categoriaSnapshot.forEach((categoria: any) => {
          this.categorias.push(categoria.payload.doc.data().Nombre);
      });
      console.log(this.categorias);
      this.seleccionCategoria(this.categorias[0]);
      
  })
  
  }


  seleccionCategoria(c:string){
    //let region = this.myForm.get('region').value;
    //if(region=="Amazonía") region="Amazonia";
    //console.log(region);

    this.localesServices.getLocalesUsuario(c,this.regionSeleccionada,this.usrId).subscribe((localesSnapshot) => {
      this.locales = [];
      localesSnapshot.forEach((local:any) =>{
        this.locales.push(local.payload.doc.data().Nombre);
      });
    })

  }


}
