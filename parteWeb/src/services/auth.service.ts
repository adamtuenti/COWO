import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { rejects } from 'assert';
//import { User } from 'firebase';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: any;

  constructor(
    public afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router,

  ) { }

  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.router.navigate(["/home"])
      return result;
    }
    catch (error) {
      console.log(error);
      Swal.fire("Error", error.message, "error")

    }

  }




  /*  async register(email: string, password: string, payloadObject: any) {
      this.afAuth.createUserWithEmailAndPassword(email, password).then(
        (user) => {
          if (user) {
            this.updateUserData(user, payloadObject)
            Swal.fire("Registro exitoso","Se ha guardado correctamente el registro","success")
  
            this.router.navigate(['/login']);
  
          }
        }).catch(
          (err) => {
            Swal.fire("Error", err.message, "error")
            console.log(err);
          })
    }
  */
  // async updateUserData(userCredential: firebase.auth.UserCredential, payloadObject: any) {
  //   //console.log(userCredential.user.uid)
  //     if(userCredential.user.uid){
  //       this.delay(1000);
  //       const user = await this.firestore.collection('users').doc(userCredential.user.uid).snapshotChanges().subscribe(
  //         (resp:any)=>{
  //           this.firestore.doc(`users/${userCredential.user.uid}`).update(payloadObject);
  //           console.log('success')

  //         }, (error) => {
  //           console.log(error)
  //         }
  //         )

  //     }

  // }

  async logout() {
    try {
      await this.afAuth.signOut();
    }
    catch (error) {
      console.log(error)
    }
  }

  getCurrentUser() {
    return this.afAuth.authState.pipe(first()).toPromise();

  }

  public getUsers() {
    return this.firestore.collection("users").snapshotChanges();
  }
  


  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
