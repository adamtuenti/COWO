import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              private firestore: AngularFirestore,
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
    
    // return new Promise ((resolve, reject)=>{ 

    //   const result = await this.auth.signInWithEmailAndPassword(email, password);
    //   this.router.navigate(["/home"])
    //   return result

    //   // firebase.default.auth().signInWithEmailAndPassword(email, password).then( res=>{ 
    //   //   localStorage.setItem('email', email);
    //   //   localStorage.setItem('userId', res.user.uid);
    //   //   this.router.navigate(["/home"])
    //   //   console.log('aqui')

        
    //   resolve(res);   
    //   }).catch(err => reject(console.log(err)))
    // })
  }

  resetPassword(email:string):Promise<void>{
    return firebase.default.auth().sendPasswordResetEmail(email);
  }

  logOutUser(){
    firebase.default.auth().signOut().then(
     (outh)=> {localStorage.clear()}
   );
 }


 async registerUser(nombre:string, apellido: string, email:string, password:string, telefono: string):Promise<any>{


   try {
       const result = await this.afAuth.createUserWithEmailAndPassword(email, password).then( res=>{
         this.firestore.collection('Usuarios').doc(res.user.uid).set({
            Nombre: nombre,
            Apellido: apellido,
            Correo: email,
            Telefono: telefono,
            Rol: 'Comprador'
          });
             this.router.navigate(["/home"])
      return result;
       })
   
    }
    catch (error) {
      console.log(error);
      Swal.fire("Error", error.message, "error")

    }

    // return new Promise ((resolve, reject)=>{
      // const result = await this.afAuth.createUserWithEmailAndPassword(email, password).then( res=>{ 

      //       this.firestore.collection('Usuarios').doc(res.user.uid).set({
      //       Nombre: nombre,
      //       Apellido: apellido,
      //       Correo: email,
      //       Telefono: telefono,
      //     });


      // resolve(res);

      // });  
    // })
  }

  async registerVendedor(nombre:string, apellido: string, email:string, password:string, telefono: string, cedula: string):Promise<any>{


   try {
       const result = await this.afAuth.createUserWithEmailAndPassword(email, password).then( res=>{
         this.firestore.collection('Usuarios').doc(res.user.uid).set({
            Nombre: nombre,
            Apellido: apellido,
            Correo: email,
            Telefono: telefono,
            Rol: 'Vendedor',
            Cedula: cedula,
          });
             this.router.navigate(["/home"])
      return result;
       })
   
    }
    catch (error) {
      console.log(error);
      Swal.fire("Error", error.message, "error")

    }
  }

}