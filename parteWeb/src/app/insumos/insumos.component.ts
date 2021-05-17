import { Component, OnInit } from '@angular/core';
import { InsumosService } from 'src/services/insumos.service';
import { Estructura } from '../interfaces/estructura.interface';

@Component({
  selector: 'app-insumos',
  templateUrl: './insumos.component.html',
  styleUrls: ['./insumos.component.css']
})
export class InsumosComponent implements OnInit {

  public insumos: Estructura[] = [];
  constructor( private insumoService: InsumosService) { }



  ngOnInit(): void {
    this.insumoService.getInsumos().subscribe(
      (ins: Estructura[]) => {
        this.insumos = ins;
      }
    );
  }

}
