import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import firebase from "firebase/app"


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public show = false;

  public usuario;
  public user$: Observable<firebase.User> = this.AuthService.afAuth.user;
  rol;
  constructor(private AuthService: AuthService,
    private router: Router,) { }

  async ngOnInit(){
    const user = await this.AuthService.getCurrentUser();
     this.user$.subscribe(res=>{
       this.usuario = res;
       this.rol = localStorage.getItem('usuarioRol');
        console.log(localStorage.getItem('usuarioRol'))

     }
     )
    // this.usuario = localStorage.getItem('idUser')
    
  }

  async logOut() {
     try {
      this.AuthService.logout();
      localStorage.clear();
      this.router.navigate(['/login']);
      this.usuario=null;
     } catch (error) {
       console.log(error);
     }
   }


  esComprador(){
    return this.rol=="Comprador";
  }

  esVendedor(){
    return this.rol=="Vendedor";
  }

}
