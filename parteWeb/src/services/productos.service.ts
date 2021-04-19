import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  uploadPercent;
  constructor(private firestore: AngularFirestore,private store: AngularFireStorage) { }

  getProductos(local:string){
    return this.firestore.collection("Productos", ref => ref.where("Local",'==',local)).snapshotChanges();
  }

  async addProducto(producto, url1,url2){

    if (url1==null||url2==null) {
      console.log("nulos")
      return 
    }

    this.firestore.collection('Productos').add({
      Categoria: producto.categoria,
      Propietario: producto.propietario,
      Local: producto.local,
      Nombre: producto.nombre,
      Precio: producto.precio,
      Imagen1: url1,
      Imagen2: url2

    })
    .then(res => {
        console.log(res);
    })
    .catch(e => {
        console.log(e);
    })
  }


/*
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
              return url;
            });
          }
          )
        ).subscribe();
      }
  }

/*
  uploadImageAsPromise (imageFile) {
    return new Promise(function (resolve, reject) {
        var storageRef = this.firestore.storage().ref("Productos/"+imageFile.name);

        //Upload file
        var task = storageRef.put(imageFile);

        //Update progress bar
        task.on('state_changed',
            function progress(snapshot){
                var percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                //uploader.value = percentage;
                console.log(percentage);
            },
            function error(err){

            },
            function complete(){
                var downloadURL = task.snapshot.downloadURL;
                return downloadURL;
            }
        );
    });
  }*/
}
