import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('costa') childComp: ElementRef;
  @ViewChild('sierra', { static: false }) childComp2: ElementRef;
  @ViewChild('amazonia', { static: false }) childComp3: ElementRef;
  

  constructor( private router: Router, private renderer: Renderer2 ) { }
  ngOnInit(): void {
  }

  goCosta(): void{
    this.router.navigate(['/', 'productos']);
  }

  goSierra(): void{
    this.router.navigate(['/', 'productos']);
  }

  goAmazonia(): void{
    this.router.navigate(['/', 'productos']);
  }




  costaOver(): void{

    console.log("hola");
    this.renderer.setAttribute(this.childComp.nativeElement,"stroke","#7fff7f");
    this.renderer.setAttribute(this.childComp.nativeElement,"fill","#7fff7f");

  }
  costaOut(): void{
    console.log("chao");
    this.renderer.setAttribute(this.childComp.nativeElement,"stroke","#fff");
    this.renderer.setAttribute(this.childComp.nativeElement,"fill","#b2b2b2");
  }
  sierraOver(): void{

    console.log("hola");
    this.renderer.setAttribute(this.childComp2.nativeElement,"stroke","#7fff7f");
    this.renderer.setAttribute(this.childComp2.nativeElement,"fill","#7fff7f");

  }
  sierraOut(): void{
    console.log("chao");
    this.renderer.setAttribute(this.childComp2.nativeElement,"stroke","#fff");
    this.renderer.setAttribute(this.childComp2.nativeElement,"fill","#b2b2b2");
  }
  amazoniaOver(): void{

    console.log("hola");
    this.renderer.setAttribute(this.childComp3.nativeElement,"stroke","#7fff7f");
    this.renderer.setAttribute(this.childComp3.nativeElement,"fill","#7fff7f");

  }
  amazoniaOut(): void{
    console.log("chao");
    this.renderer.setAttribute(this.childComp3.nativeElement,"stroke","#fff");
    this.renderer.setAttribute(this.childComp3.nativeElement,"fill","#b2b2b2");
  }

}
