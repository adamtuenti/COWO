import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { CategoriasProductosService } from 'src/services/categorias-productos.service';
import { LocalesService } from 'src/services/locales.service';
import { ProductosService } from 'src/services/productos.service';


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
  /*myForm: FormGroup;
  nombre: FormControl;
  precio: FormControl;
  descripcion: FormControl;
  region: FormControl;
  categoria: FormControl;
  local: FormControl;
  imagen: FormControl;
  imagen2: FormControl;*/

  myForm = new FormGroup({
    'nombre': new FormControl(),
    'precio' : new FormControl(),
    'region' : new FormControl(),
    'descripcion': new FormControl(),
    'categoria': new FormControl(),
    'local': new FormControl(),
    'imagen': new FormControl(),
    'imagen2': new FormControl()
  });

  imageURL: string[] = ['',''] ;
  files: any[] = [null,null];


  selectedFile: ImageSnippet;

  constructor(private categoriasServices: CategoriasProductosService, private localesServices: LocalesService,
              private productosServices: ProductosService,
              private store: AngularFireStorage) { }
  ngOnInit() {
    
  }

  showPreview(event,i) {
    const file = (event.target as HTMLInputElement).files[0];
    this.files[i] = file;
    this.myForm.patchValue({
      avatar: file
    });
    this.myForm.get('imagen').updateValueAndValidity()

    // File Preview
    /*
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL[i] = reader.result as string;
    }
    reader.readAsDataURL(file)*/
    this.uploadImage(file,i);
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

  uploadProducto(form){
    console.log(form.value)
    let producto = form.value;
    producto.propietario = this.usrId;

    this.productosServices.addProducto(producto,this.imageURL[0],this.imageURL[1])
    /*let producto={
      
    }*/

    //this.productosServices.addProducto()
  }

  uploadImage(file,i) {
    let downloadURL;
    
    // tslint:disable-next-line:prefer-const
    let path = `Productos/${file.name}`;
    if (file.type.split('/')[0] !== 'image') {
      alert('Error, el archivo no es una imagen')
      return null;
    } else {
      // tslint:disable-next-line:prefer-const
      let ref = this.store.ref(path);
      // tslint:disable-next-line:prefer-const
      let task = this.store.upload(path, file);
      //this.uploadPercent = task.percentageChanges();
      console.log('Imagen cargada');
      task.snapshotChanges().pipe(
        finalize(() => {
          downloadURL = ref.getDownloadURL();
          downloadURL.subscribe(url => {
            console.log(url);
            this.imageURL[i] =  url;
          });
        }
        )
      ).subscribe();
    }
}


}
