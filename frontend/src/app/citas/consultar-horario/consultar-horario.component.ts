import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import esLocale from '@fullcalendar/core/locales/es';

@Component({
  selector: 'app-consultar-horario',
  templateUrl: './consultar-horario.component.html',
  styleUrls: ['./consultar-horario.component.css']
})
export class ConsultarHorarioComponent implements OnInit {

  calendarOptions:CalendarOptions

  constructor() { }

  ngOnInit(): void {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      locale: esLocale,
      events: [],
      headerToolbar:{
        start: 'title',
        center:'',
        end:'today prev,next dayGridMonth dayGridWeek'
      },
      eventClick:(e)=>{
        // this.sreserva= e.event._def.extendedProps.data

        // this.modalService.open(this.modal);
      }
    };
  }

}
