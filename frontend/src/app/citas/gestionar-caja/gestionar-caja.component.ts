import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

export interface Motivo {
  _id: string
  descripcion: string
}

export interface Paciente {
  _id: string
  nombre: string
}
export interface MovimientoCaja {
  _id: string
  paciente: Paciente
  motivo: Motivo
  precio: number
  montoRecibido: number
  fechaHora: Date
}

@Component({
  selector: 'app-gestionar-caja',
  templateUrl: './gestionar-caja.component.html',
  styleUrls: ['./gestionar-caja.component.css']
})
export class GestionarCajaComponent implements OnInit {

  movimientos: MovimientoCaja;
  @ViewChild('modalOperacion') modalOperacion: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  abrirModal(){
    this.modalOperacion.nativeElement.click();
  }
}
