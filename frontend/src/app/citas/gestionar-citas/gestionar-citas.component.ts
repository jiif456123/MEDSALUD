import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Caja } from '../models/caja.model';
import { Cita } from '../models/cita.model';
import { Motivo } from '../models/motivo.model';
import { MovimientoCaja } from '../models/movimientoCaja.model';
import { Paciente } from '../models/paciente.model';
import { CajaService } from '../services/caja.service';
import { CitaService } from '../services/cita.service';
import { MotivoService } from '../services/motivo.service';
import { MovimientoCajaService } from '../services/movimiento-caja.service';
import { PacienteService } from '../services/paciente.service';

@Component({
  selector: 'app-gestionar-citas',
  templateUrl: './gestionar-citas.component.html',
  styleUrls: ['./gestionar-citas.component.css']
})
export class GestionarCitasComponent implements OnInit {

  especialidad = [{
    des: 'Dermatología',
  }, {
    des: 'Oftalmología',
  }, {
    des: 'Pediatría',
  }, {
    des: 'Medicina General',
  },
  {
    des: 'Cardiología',
  }, {
    des: 'Gastroenterología',
  }
  ]

  estados = [
    {
      numero: 1, descripcion: 'Activa',
    },
    {
      numero: 0, descripcion: 'Cancelada',
    }
  ]

  filtro = "";

  pacientes: Paciente[] = [];
  motivos: Motivo[] = [];
  @ViewChild('modalCita') modalCita: ElementRef;
  @ViewChild('modalCitaAct') modalCitaAct: ElementRef;

  idPaciente: string = '';
  formCita: FormGroup;
  formCitaAct: FormGroup;

  citas: Cita[] = []
  citaSeleccionada: Cita;

  constructor(
    private pacienteService: PacienteService,
    private motivoService: MotivoService,
    private citaService: CitaService,
    private fb: FormBuilder
  ) { }

  async ngOnInit(): Promise<void> {
    var dataPacientes = await this.pacienteService.listar().toPromise();
    this.pacientes = dataPacientes.data
    this.pacientes = this.pacientes.filter(item => item.estado == 1);

    var dataMotivo = await this.motivoService.listar().toPromise();
    this.motivos = dataMotivo.data;

    var dataCita = await this.citaService.listar().toPromise();
    this.citas = dataCita.data;

    this.formCita = this.fb.group({
      motivo: ['', [Validators.required]],
      dni: ['', [Validators.required]],
      nombrePaciente: [''],
      especialidad: ['', [Validators.required]],
      doctor: ['', [Validators.required]],
      fechaHora: ['', [Validators.required]],
    })

    this.formCitaAct = this.fb.group({
      motivo: ['', [Validators.required]],
      dni: ['', [Validators.required]],
      nombrePaciente: [''],
      especialidad: ['', [Validators.required]],
      doctor: ['', [Validators.required]],
      fechaHora: ['', [Validators.required]],
      estado: ['', [Validators.required]],
    })

  }

  abrirModal() {
    this.modalCita.nativeElement.click();
  }

  abrirModalAct(row: Cita) {
    this.citaSeleccionada = row;
    this.formCitaAct.controls.motivo.setValue(row.motivo.descripcion);
    this.formCitaAct.controls.dni.setValue(row.paciente.dni);
    this.formCitaAct.controls.nombrePaciente.setValue(row.paciente.nombre + ' ' + row.paciente.apellidoPaterno);
    this.formCitaAct.controls.especialidad.setValue(row.especialidad);
    this.formCitaAct.controls.doctor.setValue(row.doctor);
    let fechaHora = row.fechaHora as any;
    this.formCitaAct.controls.fechaHora.setValue(fechaHora.substring(0, fechaHora.length - 1));
    this.formCitaAct.controls.estado.setValue(row.estado);

    this.modalCitaAct.nativeElement.click();
  }

  buscarPaciente() {
    var dni = this.formCita.controls.dni.value;
    if (dni == null || dni == '') {
      this.idPaciente = '';
      return;
    }

    var paciente = this.pacientes.find(item => item.dni?.trim() == dni.trim());

    if (paciente) {
      this.idPaciente = paciente._id;
      this.formCita.controls.nombrePaciente.setValue(paciente.nombre + ' ' + paciente.apellidoPaterno);
    } else {
      this.idPaciente = '';

    }
  }

  async registrar() {
    if (this.formCita.invalid) {
      this.formCita.markAllAsTouched();
      Swal.fire('Advertencia', 'Revise los campos.', 'warning')
      return;
    }

    if (this.idPaciente == '') {
      Swal.fire('Advertencia', 'Seleccione un paciente', 'warning')
      return;
    }

    let datos = this.formCita.value;

    let query = {
      nIdPaciente: this.idPaciente,
      nIdMotivo: datos.motivo,
      fechaHora: new Date(datos.fechaHora),
      doctor: datos.doctor,
      especialidad: datos.especialidad

    }

    try {

      let response = await this.citaService.registrar(query).toPromise();
      this.formCita.reset();
      Swal.fire('Correcto', 'Se registro correctamente', 'success')

      var dataCita = await this.citaService.listar().toPromise();
      this.citas = dataCita.data;

    } catch (err) {
      console.log(err);
    }
  }

  async actualizar() {
    if (this.formCitaAct.invalid) {
      this.formCitaAct.markAllAsTouched();
      Swal.fire('Advertencia', 'Revise los campos.', 'warning')
      return;
    }

    let datos = this.formCitaAct.value;

    let query = {
      fechaHora: new Date(datos.fechaHora),
      doctor: datos.doctor,
      estado: datos.estado,
    }

    try {

      let response = await this.citaService.actualizar(this.citaSeleccionada._id, query).toPromise();
      Swal.fire('Correcto', 'Se actualizo correctamente', 'success')

      var dataCita = await this.citaService.listar().toPromise();
      this.citas = dataCita.data;

    } catch (err) {
      console.log(err);
    }
  }
}
