import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario;
  rol;
  constructor() { }

  ngOnInit(): void {
    this.rol = localStorage.getItem('rol');
  }


  esComprador(){
    return this.rol=="Comprador";
  }

  esVendedor(){
    return this.rol=="Vendedor";
  }

}
