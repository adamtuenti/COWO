import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private auth: AngularFireAuth) { }

  login(email:string, password:string){
    this.auth.signInWithEmailAndPassword(email,password)
  }

  resetpassword(email:string){
    this.auth.sendPasswordResetEmail(email);
  }

  logout(){
    this.auth.signOut();
  }

}