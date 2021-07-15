import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { CalendarOptions } from '@fullcalendar/angular';
import esLocale from '@fullcalendar/core/locales/es';
import { Servicio } from '../models/servicio.model';
import {ServicioService} from '../services/servicio.service';

@Component({
  selector: 'app-consultar-servicio',
  templateUrl: './consultar-servicio.component.html',
  styleUrls: ['./consultar-servicio.component.css'],
  providers: [DatePipe]
})
export class ConsultarServicioComponent implements OnInit {

  calendarOptions: CalendarOptions

  servicios: Servicio[] = [];
  eventoSeleccionado: Servicio;

  constructor(
    private servicioService: ServicioService,
  ) { }

  async ngOnInit(): Promise<void> {
    var dataServicios = await this.servicioService.listar().toPromise();
    this.servicios = dataServicios.data
  }

  Cambio(valor) {  
      
    var eventoSeleccionado = this.servicios.find(item => item._id?.trim() == valor);
    this.eventoSeleccionado=eventoSeleccionado; 
  }
  ngAfterViewInit(){
  
  }
}