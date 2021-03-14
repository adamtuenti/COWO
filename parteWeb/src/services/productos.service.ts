import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  constructor(private firestore: AngularFirestore,) { }

  getProductos(local:string){
    return this.firestore.collection("Productos", ref => ref.where("Local",'==',local)).snapshotChanges();
  }
}
