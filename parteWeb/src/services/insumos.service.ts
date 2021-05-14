import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class InsumosService {

  constructor( private firestore: AngularFirestore) { 
  }


  getInsumos(){
    return this.firestore.collection("Insumos").valueChanges();
  }
}
