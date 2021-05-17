import { Component, OnInit } from '@angular/core';
import { TurismoService } from 'src/services/turismo.service';
import { Estructura } from '../interfaces/estructura.interface';

@Component({
  selector: 'app-turismo',
  templateUrl: './turismo.component.html',
  styleUrls: ['./turismo.component.css']
})
export class TurismoComponent implements OnInit {

  public turismos: Estructura[] = [];
  constructor( private TurismoService: TurismoService) { }



  ngOnInit(): void {
    this.TurismoService.getTurismo().subscribe(
      (ins: Estructura[]) => {
        this.turismos = ins;
      }
    );
  }

}
