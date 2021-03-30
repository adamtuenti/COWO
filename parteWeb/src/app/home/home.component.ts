import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PublicidadService } from 'src/services/publicidad.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  @ViewChild('costa') costa: ElementRef;
  @ViewChild('sierra') sierra: ElementRef;
  @ViewChild('amazonia') amazonia: ElementRef;
  @ViewChild('costaTexto') costaTexto: ElementRef;
  @ViewChild('sierraTexto') sierraTexto: ElementRef;
  @ViewChild('amazoniaTexto') amazoniaTexto: ElementRef;
  @ViewChild('carruselImagen') carruselImagen: ElementRef;
  public sobreCosta:boolean;
  public sobreSierra:boolean;
  public sobreAmazonia:boolean;
  public publicidades = [];

  

  constructor( private router: Router, private renderer: Renderer2, private publicidadService: PublicidadService ) {
    
   }
  ngOnInit(): void {
    
    this.sobreCosta = false;
    this.sobreSierra = false;
    this.sobreAmazonia = false;
    this.getlocales();
    console.log(this.carruselImagen);
    console.log(this.amazoniaTexto);
    
  }

  goCosta(): void{
    this.router.navigate(['/', 'categorias',{region:"Costa"}]);
  }

  goSierra(): void{
    this.router.navigate(['/', 'categorias',{region:"Sierra"}]);
  }

  goAmazonia(): void{
    this.router.navigate(['/', 'categorias',{region:"Amazonia"}]);
  }
/*
  carruselOver(): void{
    console.log("hola");
    //this.renderer.removeClass(this.carruselImagen.nativeElement,"rgba-black-light");
    this.renderer.addClass(this.carruselImagen.nativeElement,"zoom");

  }
  carruselOut(): void{
    //this.renderer.addClass(this.carruselImagen.nativeElement,"rgba-black-light");
    this.renderer.removeClass(this.carruselImagen.nativeElement,"zoom");

  }*/


  costaOver(): void{
    //this.renderer.setAttribute(this.costa.nativeElement,"stroke","#f3e816");
    //this.renderer.setAttribute(this.costa.nativeElement,"fill","#f3e816");
    this.renderer.setAttribute(this.costaTexto.nativeElement,"fill","#fff");    
    //this.renderer.addClass(this.costa.nativeElement,"shadow");
    this.renderer.removeClass(this.costa.nativeElement,"oculto");
    
    
  }
  costaOut(): void{
    //this.renderer.setAttribute(this.costa.nativeElement,"stroke","#1C00ff00");
    //this.renderer.setAttribute(this.costa.nativeElement,"fill","#faf59e");
    this.renderer.setAttribute(this.costaTexto.nativeElement,"fill","#faf59e");
    //this.renderer.removeClass(this.costa.nativeElement,"shadow");
    this.renderer.addClass(this.costa.nativeElement,"oculto");
    
  }
  sierraOver(): void{
    //this.renderer.setAttribute(this.sierra.nativeElement,"stroke","#c4a045");
    //this.renderer.setAttribute(this.sierra.nativeElement,"fill","#c4a045");
    this.renderer.setAttribute(this.sierraTexto.nativeElement,"fill","#fff");
    //this.renderer.addClass(this.sierra.nativeElement,"shadow");
    this.renderer.removeClass(this.sierra.nativeElement,"oculto");
    
  }
  sierraOut(): void{
    //this.renderer.setAttribute(this.sierra.nativeElement,"stroke","#1C00ff00");
    //this.renderer.setAttribute(this.sierra.nativeElement,"fill","#e7d7b1");
    this.renderer.setAttribute(this.sierraTexto.nativeElement,"fill","#e7d7b1");
    //this.renderer.removeClass(this.sierra.nativeElement,"shadow");
    this.renderer.addClass(this.sierra.nativeElement,"oculto");
    
  }
  amazoniaOver(): void{

    //this.renderer.setAttribute(this.amazonia.nativeElement,"stroke","#60fe0b");
    //this.renderer.setAttribute(this.amazonia.nativeElement,"fill","#60fe0b");
    this.renderer.setAttribute(this.amazoniaTexto.nativeElement,"fill","#fff");
    //this.renderer.addClass(this.amazonia.nativeElement,"shadow");
    this.renderer.removeClass(this.amazonia.nativeElement,"oculto");
    
  }
  amazoniaOut(): void{
    //this.renderer.setAttribute(this.amazonia.nativeElement,"stroke","#1C00ff00");
    //this.renderer.setAttribute(this.amazonia.nativeElement,"fill","#bdfe9a");
    this.renderer.setAttribute(this.amazoniaTexto.nativeElement,"fill","#bdfe9a");
    //this.renderer.removeClass(this.amazonia.nativeElement,"shadow");
    this.renderer.addClass(this.amazonia.nativeElement,"oculto");
    
  }

  getlocales(): void {
    this.publicidadService.getPublicidad().subscribe((publicidadsnapshot) => {
      this.publicidades = [];
      console.log('hola')
      publicidadsnapshot.forEach((categoria: any) => {
          this.publicidades.push({
              id: categoria.payload.doc.id,
              link: categoria.payload.doc.data().Link,
              imagen: categoria.payload.doc.data().Imagen,
              

          });
      });console.log(this.publicidades);
      
  })
  }

}
