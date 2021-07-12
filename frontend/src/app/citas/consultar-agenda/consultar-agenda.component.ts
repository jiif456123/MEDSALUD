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
    private datePipe: DatePipe,
  ) { }

  async ngOnInit(): Promise<void> {

    
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      locale: esLocale,
      eventDisplay: 'block',
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
        this.formDetalle.patchValue({"horaInicio": e.event._def.extendedProps.data.horaInicio});
        this.formDetalle.patchValue({"horaFin": e.event._def.extendedProps.data.horaFin});
        this.modalDetalle.nativeElement.click();
      }
    };
    
    var dataEvento = await this.eventoService.listar().toPromise();
    this.integrarEventos(dataEvento);

    this.formEvento = this.fb.group({
      titulo: [''],
      descripcion: [''],
      fechaInicio: [''],
      fechaFin: [''],
      horaInicio: [''],
      horaFin: [''],
    })

    this.formDetalle = this.fb.group({
      titulo: [''],
      descripcion: [''],
      fechaInicio: [''],
      fechaFin: [''],
      horaInicio: [''],
      horaFin: [''],
    })
  }

  async registrar() {

    if (this.formEvento.invalid) {
      return;
    }    
    let datos = this.formEvento.value
    let query = {
      titulo: datos.titulo,
      descripcion: datos.descripcion,
      fechaInicio: datos.fechaInicio,
      fechaFin: datos.fechaFin,
      horaInicio: datos.horaInicio,
      horaFin: datos.horaFin,
    }
    try {

      let response = await this.eventoService.registrar(query).toPromise();
      this.formEvento.reset();
      var dataEvento = await this.eventoService.listar().toPromise();
      this.eventos = dataEvento.data;

    } catch (err) {
      console.log(err);
    }
    /**
  * actualiza el calendario -- fetchevents no es optimo para esta tarea
  */
    var dataEvento = await this.eventoService.listar().toPromise();
    this.integrarEventos(dataEvento);
  }

  integrarEventos(dataEvento){

    this.eventos = dataEvento.data;
    
    var datos = [];
    this.eventos.forEach(item => {
      /**
      * EL Calendario lee la fecha final como --/--/-- 00:00:00, por eso no considera el ultimo día
      */
      let fechadiv = item.fechaFin.split('-');
      let fechanum = Number(fechadiv[2])+1;
      let fecha= fechadiv[0]+'-'+fechadiv[1]+'-'+fechanum;
      
      datos.push({ 
      title: item.titulo, 
      startRecur: item.fechaInicio, 
      endRecur: fecha,
      startTime: item.horaInicio, 
      endTime: item.horaFin, 
      data:item })
    })

    this.calendarOptions.events = datos;
}   
  
  
  ngAfterViewInit(){
    
  }
}