import { Component, OnInit } from '@angular/core';
import {LoginService} from 'src/services/login.service'
import {MensajeService} from 'src/services/mensaje.service'


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
    this.loginService.loginUser(form.value.email,form.value.password).
    then(
      (res)=>{
        localStorage.setItem('userId', res.user.uid);
        console.log( res.user.uid)
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