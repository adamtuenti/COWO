import { Component, OnInit } from '@angular/core';
import {LoginService} from 'src/services/login.service'
import {MensajeService} from 'src/services/mensaje.service'
import { FormControl, FormGroupDirective, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,
              private mensajeService:MensajeService
             ) { }


  ngOnInit(): void {

  }


  async loginUser(form):Promise<void>{
    console.log(form.value)
    this.loginService.login(form.value.email,form.value.password).
    then(
      (res)=>{
        localStorage.setItem('idUser', res.user.uid);
        localStorage.setItem('rol', res.user.Rol);
        console.log( res.user.uid)
        //console.log( res.user.Rol)
      },
      async error => {
        var mensaje=error.code.split('/')[1]
        const presentarMensaje = this.mensajeService.AuthErrorCodeSpanish(mensaje);
        console.log(presentarMensaje)
        
      }
    )
  }

  async goToReset(email){
    this.loginService.resetPassword(email).then(
      (res)=>{   
        console.log("Se ha enviado un enlace al correo para restaurar su contraseña: "+ email);
      },async error => {
        var mensaje=error.code.split('/')[1]
        const presentarMensaje = this.mensajeService.AuthErrorCodeSpanish(mensaje);
        console.log(presentarMensaje)
      } 
    )
  }

  



  

}