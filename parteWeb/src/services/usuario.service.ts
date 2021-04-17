import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private firestore: AngularFirestore,) { }

  getUsuario(id:any){
      console.log('hola q tal: '+id)
    return this.firestore.collection("Usuarios").doc(id).snapshotChanges();
  }

}
