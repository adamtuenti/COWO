import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  msg:string;
  ngOnInit(): void {
  }

  eventR1(){
    this.msg='Costa works!';
    return this.msg;
  }
  eventR2(){
    this.msg='Sierra works!';
    return this.msg;
  }
  eventR3(){
    this.msg='Amazonia works!';
    return this.msg;
  }

}
