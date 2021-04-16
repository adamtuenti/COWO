import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class CategoriasProductosService {

  constructor(private firestore: AngularFirestore,) { }

  getCategoriasProductos(categoria:string){
    return this.firestore.collection("Categorias", ref => ref.where("Region",'==',categoria)).snapshotChanges();
  }


}
