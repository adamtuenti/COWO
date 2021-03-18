import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PublicidadService {

  constructor(private firestore: AngularFirestore,) { }

  getPublicidad(){
    return this.firestore.collection("Publicidad").snapshotChanges();
  }


}
