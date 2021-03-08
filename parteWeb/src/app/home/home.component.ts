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
    this.router.navigate(['/', 'productos',{region:"costa"}]);
  }

  goSierra(): void{
    this.router.navigate(['/', 'productos',{region:"sierra"}]);
  }

  goAmazonia(): void{
    this.router.navigate(['/', 'productos',{region:"amazonia"}]);
  }




  costaOver(): void{
    this.renderer.setAttribute(this.childComp.nativeElement,"stroke","#f3e816");
    this.renderer.setAttribute(this.childComp.nativeElement,"fill","#f3e816");
  }
  costaOut(): void{
    this.renderer.setAttribute(this.childComp.nativeElement,"stroke","#fff");
    this.renderer.setAttribute(this.childComp.nativeElement,"fill","#faf59e");
  }
  sierraOver(): void{
    this.renderer.setAttribute(this.childComp2.nativeElement,"stroke","#60fe0b");
    this.renderer.setAttribute(this.childComp2.nativeElement,"fill","#60fe0b");
  }
  sierraOut(): void{
    this.renderer.setAttribute(this.childComp2.nativeElement,"stroke","#fff");
    this.renderer.setAttribute(this.childComp2.nativeElement,"fill","#bdfe9a");
  }
  amazoniaOver(): void{
    this.renderer.setAttribute(this.childComp3.nativeElement,"stroke","#c4a045");
    this.renderer.setAttribute(this.childComp3.nativeElement,"fill","#c4a045");
  }
  amazoniaOut(): void{
    this.renderer.setAttribute(this.childComp3.nativeElement,"stroke","#fff");
    this.renderer.setAttribute(this.childComp3.nativeElement,"fill","#e7d7b1");
  }

}
