import { Component, OnInit } from '@angular/core';
import { ThumanoService } from 'src/services/thumano.service';
import { Estructura } from '../interfaces/estructura.interface';

@Component({
  selector: 'app-thumano',
  templateUrl: './thumano.component.html',
  styleUrls: ['./thumano.component.css']
})
export class ThumanoComponent implements OnInit {

  public talentos: Estructura[] = [];
  constructor( private ThumanoService: ThumanoService) { }



  ngOnInit(): void {
    this.ThumanoService.getThumano().subscribe(
      (ins: Estructura[]) => {
        this.talentos = ins;
      }
    );
  }
}
