import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ThumanoService {

  constructor(private firestore: AngularFirestore) { }

  getThumano(){
    return this.firestore.collection("TalentoHumano").valueChanges();
  }
}
