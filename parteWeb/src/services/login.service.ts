import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private auth: AngularFireAuth) { }

  loginUser(email:string, password:string):Promise<firebase.default.auth.UserCredential>{
    
    return new Promise ((resolve, reject)=>{ 
      firebase.default.auth().signInWithEmailAndPassword(email, password).then( res=>{ 
        localStorage.setItem('email', email);
        localStorage.setItem('userId', res.user.uid);

        
      resolve(res);   
      }).catch(err => reject(err))
    })
  }

  resetPassword(email:string):Promise<void>{
    return firebase.default.auth().sendPasswordResetEmail(email);
  }

  logOutUser(){
    firebase.default.auth().signOut().then(
     (outh)=> {localStorage.clear()}
   );
 }

}