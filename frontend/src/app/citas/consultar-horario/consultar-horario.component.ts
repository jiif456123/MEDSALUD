import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import esLocale from '@fullcalendar/core/locales/es';
import { Cita } from '../models/cita.model';
import { Paciente } from '../models/paciente.model';
import { CitaService } from '../services/cita.service';

@Component({
  selector: 'app-consultar-horario',
  templateUrl: './consultar-horario.component.html',
  styleUrls: ['./consultar-horario.component.css']
})
export class ConsultarHorarioComponent implements OnInit {

  calendarOptions: CalendarOptions

  cita: Cita[] = [];
  citaSeleccionada: Cita;

  @ViewChild('modalDetalle') modalDetalle: ElementRef;

  constructor(
    private citaService: CitaService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      locale: esLocale,
      events: [],
      headerToolbar: {
        start: 'title',
        center: '',
        end: 'today prev,next dayGridMonth dayGridWeek'
      },
      eventClick: (e) => {
        this.citaSeleccionada = e.event._def.extendedProps.data

        this.modalDetalle.nativeElement.click();
      }
    };

    var dataCita = await this.citaService.listar().toPromise();

    this.cita = dataCita.data;
    var datos = [];
    this.cita.forEach(item => {
      datos.push({ title: item.especialidad, date: item.fechaHora, data: item })
    })

    this.calendarOptions.events = datos;
  }

  ngAfterViewInit(){
    
  }
}
