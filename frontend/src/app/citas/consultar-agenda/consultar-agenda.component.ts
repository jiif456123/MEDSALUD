import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalendarOptions } from '@fullcalendar/angular';
import esLocale from '@fullcalendar/core/locales/es';
import { Evento } from '../models/evento.model';
import { EventoService } from '../services/evento.service';
import Swal from 'sweetalert2';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

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
  @ViewChild('modalModificar') modalModificar: ElementRef;

  formEvento: FormGroup;
  formDetalle: FormGroup;
  formModificar: FormGroup;


  constructor(
    private eventoService: EventoService,
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private router: Router,
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
        this.eventoSeleccionado = e.event._def.extendedProps.data;
        this.formDetalle.patchValue({ "titulo": this.eventoSeleccionado.titulo });
        this.formDetalle.patchValue({ "descripcion": this.eventoSeleccionado.descripcion });
        this.formDetalle.patchValue({ "fechaInicio": this.eventoSeleccionado.fechaInicio });
        this.formDetalle.patchValue({ "fechaFin": this.eventoSeleccionado.fechaFin });
        this.formDetalle.patchValue({ "horaInicio": this.eventoSeleccionado.horaInicio });
        this.formDetalle.patchValue({ "horaFin": this.eventoSeleccionado.horaFin });
        this.modalDetalle.nativeElement.click();
      }
    };
    this.integrarEventos();

    this.formEvento = this.fb.group({
      titulo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      fechaInicio: ['', [Validators.required]],
      fechaFin: ['', [Validators.required]],
      horaInicio: ['', [Validators.required]],
      horaFin: ['', [Validators.required]],
    })

    this.formDetalle = this.fb.group({
      titulo: [''],
      descripcion: [''],
      fechaInicio: [''],
      fechaFin: [''],
      horaInicio: [''],
      horaFin: [''],
    })

    this.formModificar = this.fb.group({
      titulo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      fechaInicio: ['', [Validators.required]],
      fechaFin: ['', [Validators.required]],
      horaInicio: ['', [Validators.required]],
      horaFin: ['', [Validators.required]],
    })

  }

  async registrar() {

    if (this.formEvento.invalid) {
      this.formEvento.markAllAsTouched();
      Swal.fire('Advertencia', 'Revise los campos.', 'warning')
      return;
    }

    let datos = this.formEvento.value

    let fechaInicio = new Date(datos.fechaInicio + "T" + datos.horaInicio)
    let fechaFin = new Date(datos.fechaFin + "T" + datos.horaFin)
    let fechaS = new Date()

    if (fechaInicio > fechaFin) {
      Swal.fire('Advertencia', 'La fecha final no puede ser menor que la fecha de inicio.', 'warning')
      return;
    }

    if (fechaS > fechaInicio) {
      Swal.fire('Advertencia', 'La fecha de incio no puede ser menor que la fecha actual.', 'warning')
      return;
    }

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
      Swal.fire('Correcto', 'Se registro correctamente', 'success')

    } catch (err) {
      console.log(err);
    }
    this.integrarEventos();
    /**
  * actualiza el calendario -- fetchevents no es optimo para esta tarea
  */

  }

  async modificar() {
    if (this.formModificar.invalid) {
      this.formModificar.markAllAsTouched();
      Swal.fire('Advertencia', 'Revise los campos.', 'warning')
      return;
    }

    let datos = this.formModificar.value

    let fechaInicio = new Date(datos.fechaInicio + "T" + datos.horaInicio)
    let fechaFin = new Date(datos.fechaFin + "T" + datos.horaFin)
    let fechaS = new Date()

    if (fechaInicio > fechaFin) {
      Swal.fire('Advertencia', 'La fecha final no puede ser menor que la fecha de inicio.', 'warning')
      return;
    }

    let query = {
      titulo: datos.titulo,
      descripcion: datos.descripcion,
      fechaInicio: datos.fechaInicio,
      fechaFin: datos.fechaFin,
      horaInicio: datos.horaInicio,
      horaFin: datos.horaFin,
    }

    try {
      let response = await this.eventoService.actualizar(this.eventoSeleccionado._id, query).toPromise();
      var dataEventos = await this.eventoService.listar().toPromise();
      this.eventos = dataEventos.data;
      Swal.fire('Correcto', 'Se actualizo correctamente', 'success')

    } catch (err) {
      console.log(err);
    }
    this.integrarEventos();
  }

  async eliminar() {
    Swal.fire({
      text: '¿Está seguro que desea elimnar el evento?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: 'Aceptar'
    }).then((willDelete) => {
      if (willDelete.isConfirmed) {
        this.eventoService.eliminar(this.eventoSeleccionado._id).pipe(switchMap(() => {
          return this.eventoService.listar();
        }))
          .subscribe(data => {
            this.eventos = data.data;
            Swal.fire('Correcto', 'El evento se eliminó correctamente', 'success');
            this.integrarEventos();
          }
          );
      } else {
        Swal.fire('El evento no ha sido eliminado'),
          { icon: 'info' }
      }
    })

  };

  async integrarEventos() {
    var dataEvento = await this.eventoService.listar().toPromise();

    this.eventos = dataEvento.data;

    var datos = [];
    this.eventos.forEach(item => {
      /**
      * EL Calendario lee la fecha final como --/--/-- 00:00:00, por eso no considera el ultimo día
      */
      let fechadiv = item.fechaFin.split('-');
      let fechanum = Number(fechadiv[2]) + 1;
      let fecha = fechadiv[0] + '-' + fechadiv[1] + '-' + fechanum;

      datos.push({
        title: item.titulo,
        startRecur: item.fechaInicio,
        endRecur: fecha,
        startTime: item.horaInicio,
        endTime: item.horaFin,
        data: item
      })
    })

    this.calendarOptions.events = datos;
  }

  abrirModalMod() {
    this.formModificar.controls.titulo.setValue(this.eventoSeleccionado.titulo);
    this.formModificar.controls.descripcion.setValue(this.eventoSeleccionado.descripcion);
    this.formModificar.controls.fechaInicio.setValue(this.eventoSeleccionado.fechaInicio);
    this.formModificar.controls.fechaFin.setValue(this.eventoSeleccionado.fechaFin);
    this.formModificar.controls.horaInicio.setValue(this.eventoSeleccionado.horaInicio);
    this.formModificar.controls.horaFin.setValue(this.eventoSeleccionado.horaFin);
    this.modalModificar.nativeElement.click();
  }


  ngAfterViewInit() {

  }
}