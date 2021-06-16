import { Component, OnInit } from '@angular/core';
import { movimientoMService } from 'Services/movimientoM.service';
import { NgForm } from "@angular/forms"; //para add
import { MovimientoM} from 'models/movimientoM.model';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
}
