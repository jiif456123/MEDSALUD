import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { CalendarOptions } from '@fullcalendar/angular';
import esLocale from '@fullcalendar/core/locales/es';
import { Evento } from '../models/evento.model';
import {EventoService} from '../services/evento.service';

@Component({
  selector: 'app-consultar-agenda',
  templateUrl: './consultar-agenda.component.html',
  styleUrls: ['./consultar-agenda.component.css'],
  providers: [DatePipe]
})
export class ConsultarAgendaComponent implements OnInit {

  calendarOptions: CalendarOptions

  eventos: Evento[] = [];
  eventoSeleccionado: Evento;

  @ViewChild('modalEvento') modalEvento: ElementRef;
  @ViewChild('modalDetalle') modalDetalle: ElementRef;

  formEvento: FormGroup;
  formDetalle: FormGroup;

  constructor(
    private eventoService: EventoService,
    private fb: FormBuilder,
  ) { }

  async ngOnInit(): Promise<void> {

    
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      locale: esLocale,
      events: [],
      headerToolbar: {
        start: 'title',
        center: '',
        end: 'today prev,next dayGridMonth dayGridWeek registrar'
      },
      customButtons: {
        registrar: {
          text: 'Registrar',
          click: () => this.modalEvento.nativeElement.click()
        }
      },
      eventClick: (e) => {
        this.formDetalle.patchValue({"titulo": e.event._def.extendedProps.data.titulo});
        this.formDetalle.patchValue({"descripcion": e.event._def.extendedProps.data.descripcion});
        this.formDetalle.patchValue({"fechaInicio": e.event._def.extendedProps.data.fechaInicio});
        this.formDetalle.patchValue({"fechaFin": e.event._def.extendedProps.data.fechaFin});
        this.modalDetalle.nativeElement.click();
      }
    };
    var dataEvento = await this.eventoService.listar().toPromise();

    this.eventos = dataEvento.data;

    var datos = [];
    this.eventos.forEach(item => {
      datos.push({ title: item.titulo, start: item.fechaInicio, end: item.fechaFin, data:item })
    })

    this.calendarOptions.events = datos;

    this.formEvento = this.fb.group({
      titulo: [''],
      descripcion: [''],
      fechaInicio: [''],
      fechaFin: [''],
    })

    this.formDetalle = this.fb.group({
      titulo: [''],
      descripcion: [''],
      fechaInicio: [Date],
      fechaFin: [Date],
    })
  }
  
  transformarFecha(fecha: Date) {
    return `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}`
  }
  async registrar() {

    if (this.formEvento.invalid) {
      return;
    }
    let datos = this.formEvento.value
    let query = {
      titulo: datos.titulo,
      descripcion: datos.descripcion,
      fechaInicio: new Date(datos.fechaInicio),
      fechaFin: new Date(datos.fechaFin),
    }
    try {

      let response = await this.eventoService.registrar(query).toPromise();
      this.formEvento.reset();
      var dataEvento = await this.eventoService.listar().toPromise();
      this.eventos = dataEvento.data;

    } catch (err) {
      console.log(err);
    }
  }

  ngAfterViewInit(){
    
  }
}