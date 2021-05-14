import { Component, OnInit } from '@angular/core';
import { InsumosService } from 'src/services/insumos.service';
import { Insumo } from '../interfaces/insumo.interface';

@Component({
  selector: 'app-insumos',
  templateUrl: './insumos.component.html',
  styleUrls: ['./insumos.component.css']
})
export class InsumosComponent implements OnInit {

  public insumos: Insumo[] = [];
  constructor( private insumoService: InsumosService) { }



  ngOnInit(): void {
    this.insumoService.getInsumos().subscribe(
      (ins: Insumo[]) => {
        this.insumos = ins;
      }
    );
  }

}
