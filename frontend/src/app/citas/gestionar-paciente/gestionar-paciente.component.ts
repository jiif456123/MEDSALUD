import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Paciente } from '../models/paciente.model';
import { PacienteService } from '../services/paciente.service';

@Component({
  selector: 'app-gestionar-paciente',
  templateUrl: './gestionar-paciente.component.html',
  styleUrls: ['./gestionar-paciente.component.css'],
  providers: [DatePipe]
})
export class GestionarPacienteComponent implements OnInit {
  @ViewChild('modalRegistrar') modalRegistrar: ElementRef;
  @ViewChild('modalModificar') modalModificar: ElementRef;

  formPaciente: FormGroup;
  formPacienteModificar: FormGroup;

  pacientes: Paciente[] = []
  pacienteSeleccionado: Paciente;
  constructor(
    private pacienteService: PacienteService,
    private fb: FormBuilder,
    private datePipe: DatePipe
  ) { }

  async ngOnInit(): Promise<void> {
    var data = await this.pacienteService.listar().toPromise();
    this.pacientes = data.data
    this.formPaciente = this.fb.group({
      nombre: ['', [Validators.required]],
      apellidoMaterno: ['', [Validators.required]],
      apellidoPaterno: ['', [Validators.required]],
      dni: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      email: ['', [Validators.required]],
      fechaNacimiento: ['', [Validators.required]],
      direccion: ['', [Validators.required]],

    })

    this.formPacienteModificar = this.fb.group({
      nombre: ['', [Validators.required]],
      apellidoMaterno: ['', [Validators.required]],
      apellidoPaterno: ['', [Validators.required]],
      dni: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      email: ['', [Validators.required]],
      fechaNacimiento: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
    })

  }

  abrirModal() {
    this.modalRegistrar.nativeElement.click();
  }

  abrirModalModificar(row: Paciente) {
    this.modalModificar.nativeElement.click();
    this.pacienteSeleccionado = row;
    this.formPacienteModificar.controls.nombre.setValue(row.nombre);
    this.formPacienteModificar.controls.apellidoMaterno.setValue(row.apellidoMaterno);
    this.formPacienteModificar.controls.apellidoPaterno.setValue(row.apellidoPaterno);
    this.formPacienteModificar.controls.dni.setValue(row.dni);
    this.formPacienteModificar.controls.celular.setValue(row.celular);
    this.formPacienteModificar.controls.email.setValue(row.email);
    this.formPacienteModificar.controls.fechaNacimiento.setValue(this.datePipe.transform(row.fechaNaciemineto, 'yyyy-MM-dd'));
    this.formPacienteModificar.controls.direccion.setValue(row.direccion);

  }

  transformarFecha(fecha: Date) {
    return `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}`
  }

  async registrar() {

    let datos = this.formPaciente.value
    let query = {
      nombre: datos.nombre,
      apellidoPaterno: datos.apellidoPaterno,
      apellidoMaterno: datos.apellidoMaterno,
      dni: datos.dni,
      celular: datos.celular,
      email: datos.email,
      fechaNaciemineto: datos.fechaNacimiento,
      direccion: datos.direccion,
      estado: 1
    }

    try {

      let response = await this.pacienteService.registrar(query).toPromise();
      this.formPaciente.reset();
      var dataMovimientoCaja = await this.pacienteService.listar().toPromise();
      this.pacientes = dataMovimientoCaja.data;

    } catch (err) {
      console.log(err);
    }
  }

  async modificar() {
    let datos = this.formPacienteModificar.value
    let query = {
      nombre: datos.nombre,
      apellidoPaterno: datos.apellidoPaterno,
      apellidoMaterno: datos.apellidoMaterno,
      dni: datos.dni,
      celular: datos.celular,
      email: datos.email,
      fechaNaciemineto: datos.fechaNacimiento,
      direccion: datos.direccion,
    }

    try {

      let response = await this.pacienteService.actualizar(this.pacienteSeleccionado._id, query).toPromise();
      this.formPaciente.reset();
      var dataMovimientoCaja = await this.pacienteService.listar().toPromise();
      this.pacientes = dataMovimientoCaja.data;

    } catch (err) {
      console.log(err);
    }
  }

  async cambiarEstado(estado: number, id: string){
    let query = {
      estado: estado
    }

    try {

      let response = await this.pacienteService.actualizar(id, query).toPromise();
      this.formPaciente.reset();
      var dataMovimientoCaja = await this.pacienteService.listar().toPromise();
      this.pacientes = dataMovimientoCaja.data;

    } catch (err) {
      console.log(err);
    }
  }

}
