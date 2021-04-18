import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  uploadPercent;
  constructor(private firestore: AngularFirestore,private store: AngularFireStorage,) { }

  getProductos(local:string){
    return this.firestore.collection("Productos", ref => ref.where("Local",'==',local)).snapshotChanges();
  }

  async addProducto(producto, file1,file2){
    let imagen1 = await this.uploadImage(file1);
    let imagen2 = await this.uploadImage(file2);
    if (imagen1==null||imagen2==null) return 

    this.firestore.collection('Productos').add({
      Categoria: producto.categoria,
      Propietario: producto.propietario,
      Local: producto.local,
      Nombre: producto.nombre,
      Precio: producto.precio,
      Imagen1: imagen1,
      Imagen2: imagen2

    })
    .then(res => {
        console.log(res);
    })
    .catch(e => {
        console.log(e);
    })
  }



  uploadImage(file) {
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
      this.uploadPercent = task.percentageChanges();
      console.log('Imagen cargada');
      task.snapshotChanges().pipe(
        finalize(() => {
          downloadURL = ref.getDownloadURL();
          downloadURL.subscribe(url => {
            console.log(url);
            return downloadURL;
          });
        }
        )
      ).subscribe();
    }
  }
}
