import { Component, OnInit } from '@angular/core';
import { movimientoMService } from 'Services/movimientoM.service';
import { NgForm } from "@angular/forms"; //para add
import { MovimientoM} from 'models/movimientoM.model';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css' ,'../farmacia.css'],
  providers: [movimientoMService]
})
export class MovimientosComponent implements OnInit {
  public pageSize = 7;
  public page;

  constructor(private movimientoMService: movimientoMService) { }
  medicamentos = [];
  equiposM = [];
  ngOnInit(): void {
    this.getMovimientoM();
  }

  getMovimientoM(){
    this.movimientoMService.getMovimientoM().subscribe(
      response =>{
        this.medicamentos = response.data;
        this.page=1;
      }
      
    )}
  
}
