import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LogisticaService {

  constructor(private firestore: AngularFirestore) { }

  getLogistica(){
    return this.firestore.collection("Logistica").valueChanges();
  }
}
