import { Component, OnInit } from '@angular/core';
import {LoginService} from 'src/services/login.service'
import {MensajeService} from 'src/services/mensaje.service'


@Component({
  selector: 'app-nueva-cuenta-vendedor',
  templateUrl: './nueva-cuenta-vendedor.component.html',
  styleUrls: ['./nueva-cuenta-vendedor.component.css']
})
export class NuevaCuentaVendedorComponent implements OnInit {

  constructor(private loginService: LoginService,
              private mensajeService:MensajeService) { }

  ngOnInit(): void {
  }

  crearCuenta(form){
    console.log(form.value)
    this.loginService.registerVendedor(form.value.nombre,form.value.apellido,form.value.email,'123456',form.value.telefono, form.value.cedula).
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
