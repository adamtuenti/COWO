import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TurismoService {

  constructor(private firestore: AngularFirestore) { }

  getTurismo(){
    return this.firestore.collection("Turismo").valueChanges();
  }
}
