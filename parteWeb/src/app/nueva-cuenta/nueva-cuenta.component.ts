import { Component, OnInit } from '@angular/core';
import {LoginService} from 'src/services/login.service'
import {MensajeService} from 'src/services/mensaje.service'

@Component({
  selector: 'app-nueva-cuenta',
  templateUrl: './nueva-cuenta.component.html',
  styleUrls: ['./nueva-cuenta.component.css']
})
export class NuevaCuentaComponent implements OnInit {

  constructor(private loginService: LoginService,
              private mensajeService:MensajeService) { }

  ngOnInit(): void {
  }

  crearCuenta(form){
    console.log(form.value)
    this.loginService.registerUser(form.value.nombre,form.value.apellido,form.value.email,'123456',form.value.telefono).
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

}
