import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LocalesService {

  constructor(private firestore: AngularFirestore,) { }

  getLocales(categoria:string, region:string){
    return this.firestore.collection("Locales", ref => ref.where("Categoria",'==',categoria).where("Region",'==',region)).snapshotChanges();
  }
}
