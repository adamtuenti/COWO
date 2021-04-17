import { Component, OnInit } from '@angular/core';
import {LoginService} from 'src/services/login.service'
import {UsuarioService} from 'src/services/usuario.service'
import {MensajeService} from 'src/services/mensaje.service'
import { FormControl, FormGroupDirective, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public datosUsuario;

  constructor(private loginService: LoginService,
              private usuarioService: UsuarioService,
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
        this.getRol(res.user.uid)
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

  getRol(id){

    this.usuarioService.getUsuario(id).subscribe((userSnapshot) => {
      this.datosUsuario = userSnapshot.payload.data();
      
      console.log("datos usuario: ", userSnapshot.payload.data());
      localStorage.setItem('usuarioRol',this.datosUsuario.Rol);

    }, (error) => {
      console.log(error)
    });



    // const user = this.usuarioService.getUsuario(id);
    // console.log('user: ',user.)
    

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