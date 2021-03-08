import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import {Router} from '@angular/router'; 

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
  public sobreCosta:boolean;
  public sobreSierra:boolean;
  public sobreAmazonia:boolean;

  

  constructor( private router: Router, private renderer: Renderer2 ) { }
  ngOnInit(): void {

    this.sobreCosta = false;
    this.sobreSierra = false;
    this.sobreAmazonia = false;
  }

  goCosta(): void{
    this.router.navigate(['/', 'productos',{region:"Costa"}]);
  }

  goSierra(): void{
    this.router.navigate(['/', 'productos',{region:"Sierra"}]);
  }

  goAmazonia(): void{
    this.router.navigate(['/', 'productos',{region:"Amazonia"}]);
  }




  costaOver(): void{
    this.renderer.setAttribute(this.costa.nativeElement,"stroke","#f3e816");
    this.renderer.setAttribute(this.costa.nativeElement,"fill","#f3e816");
    this.renderer.setAttribute(this.costaTexto.nativeElement,"fill","#fff");
    
  }
  costaOut(): void{
    this.renderer.setAttribute(this.costa.nativeElement,"stroke","#fff");
    this.renderer.setAttribute(this.costa.nativeElement,"fill","#faf59e");
    this.renderer.setAttribute(this.costaTexto.nativeElement,"fill","#faf59e");
    
  }
  sierraOver(): void{
    this.renderer.setAttribute(this.sierra.nativeElement,"stroke","#60fe0b");
    this.renderer.setAttribute(this.sierra.nativeElement,"fill","#60fe0b");
    this.renderer.setAttribute(this.sierraTexto.nativeElement,"fill","#fff");
    
  }
  sierraOut(): void{
    this.renderer.setAttribute(this.sierra.nativeElement,"stroke","#fff");
    this.renderer.setAttribute(this.sierra.nativeElement,"fill","#bdfe9a");
    this.renderer.setAttribute(this.sierraTexto.nativeElement,"fill","#bdfe9a");
    
  }
  amazoniaOver(): void{
    this.renderer.setAttribute(this.amazonia.nativeElement,"stroke","#c4a045");
    this.renderer.setAttribute(this.amazonia.nativeElement,"fill","#c4a045");
    this.renderer.setAttribute(this.amazoniaTexto.nativeElement,"fill","#fff");
    
  }
  amazoniaOut(): void{
    this.renderer.setAttribute(this.amazonia.nativeElement,"stroke","#fff");
    this.renderer.setAttribute(this.amazonia.nativeElement,"fill","#e7d7b1");
    this.renderer.setAttribute(this.amazoniaTexto.nativeElement,"fill","#e7d7b1");
    
  }

}
