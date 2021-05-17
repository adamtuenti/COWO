import { Component, OnInit } from '@angular/core';
import { LogisticaService } from 'src/services/logistica.service';
import { Estructura } from '../interfaces/estructura.interface';

@Component({
  selector: 'app-logistica',
  templateUrl: './logistica.component.html',
  styleUrls: ['./logistica.component.css']
})
export class LogisticaComponent implements OnInit {

  public logisticas: Estructura[] = [];
  constructor( private insumoService: LogisticaService) { }

  ngOnInit(): void {
    this.insumoService.getLogistica().subscribe(
      (ins: Estructura[]) => {
        this.logisticas = ins;
      }
    );
  }

}
