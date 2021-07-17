import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { FilterPipe } from 'ngx-filter-pipe';
@Component({
  selector: 'app-gestionar-perfiles',
  templateUrl: './gestionar-perfiles.component.html',
  styleUrls: ['./gestionar-perfiles.component.css' ,'../farmacia.css'],
  providers: [DatePipe]
})
export class GestionarPerfilComponent implements OnInit {
  @ViewChild('modalRegistrar') modalRegistrar: ElementRef;
  @ViewChild('modalModificar') modalModificar: ElementRef;
  @ViewChild('modalVer') modalVer: ElementRef;
  formUser: FormGroup;
  formUserModificar: FormGroup;
  formUserVer: FormGroup;

  filtro = "";

  users: User[] = []
  userSeleccionada: User;
  public user: User = new User();
  constructor(
    private userService: UserService,
    private pipe: FilterPipe,
    private fb: FormBuilder,
    private datePipe: DatePipe
  ) { }

  async ngOnInit(): Promise<void> {
    var data = await this.userService.listar().toPromise();
    this.users = data.data
    this.formUser = this.fb.group({
      nombre: ['', [Validators.required]],
      rol: ['', [Validators.required]],
      apellidoPaterno: ['', [Validators.required]],
      apellidoMaterno: ['', [Validators.required]],
      dni: ['', [Validators.required]],
      celular: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
      email: ['', [Validators.required]],
      fechaNacimiento: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      especialidad: ['', [Validators.required]],
      contraseña: ['', [Validators.required]],
      user: ['', [Validators.required]],
    })

    this.formUserModificar = this.fb.group({
        nombre: ['', [Validators.required]],
        rol: ['', [Validators.required]],
        apellidoPaterno: ['', [Validators.required]],
        apellidoMaterno: ['', [Validators.required]],
        dni: ['', [Validators.required]],
        celular: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
        email: ['', [Validators.required]],
        fechaNacimiento: ['', [Validators.required]],
        direccion: ['', [Validators.required]],
        especialidad: ['', [Validators.required]],
        contraseña: ['', [Validators.required]],
        user: ['', [Validators.required]],
    })

    this.formUserVer = this.fb.group({
      nombre: ['', [Validators.required]],
      rol: ['', [Validators.required]],
      apellidoPaterno: ['', [Validators.required]],
      apellidoMaterno: ['', [Validators.required]],
      dni: ['', [Validators.required]],
      celular: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
      email: ['', [Validators.required]],
      fechaNacimiento: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      especialidad: ['', [Validators.required]],
      contraseña: ['', [Validators.required]],
      user: ['', [Validators.required]],
  })

  }

  abrirModal() {
    this.modalRegistrar.nativeElement.click();
  }

  abrirModalModificar(row: User) {
    this.modalModificar.nativeElement.click();
    this.userSeleccionada = row;
    this.formUserModificar.controls.nombre.setValue(row.nombre);
    this.formUserModificar.controls.rol.setValue(row.rol);
    this.formUserModificar.controls.apellidoPaterno.setValue(row.apellidoPaterno);
    this.formUserModificar.controls.apellidoMaterno.setValue(row.apellidoMaterno);
    this.formUserModificar.controls.dni.setValue(row.dni);
    this.formUserModificar.controls.celular.setValue(row.celular);
    this.formUserModificar.controls.email.setValue(row.email);
    this.formUserModificar.controls.fechaNacimiento.setValue(row.fechaNacimiento);
    this.formUserModificar.controls.direccion.setValue(row.direccion);
    this.formUserModificar.controls.especialidad.setValue(row.especialidad);
    this.formUserModificar.controls.user.setValue(row.user);
    this.formUserModificar.controls.contraseña.setValue(row.contraseña);

  }

  abrirModalVer(row: User) {
    this.modalVer.nativeElement.click();
    this.userSeleccionada = row;
    this.formUserVer.controls.nombre.setValue(row.nombre);
    this.formUserVer.controls.rol.setValue(row.rol);
    this.formUserVer.controls.apellidoPaterno.setValue(row.apellidoPaterno);
    this.formUserVer.controls.apellidoMaterno.setValue(row.apellidoMaterno);
    this.formUserVer.controls.dni.setValue(row.dni);
    this.formUserVer.controls.celular.setValue(row.celular);
    this.formUserVer.controls.email.setValue(row.email);
    this.formUserVer.controls.fechaNacimiento.setValue(row.fechaNacimiento);
    this.formUserVer.controls.direccion.setValue(row.direccion);
    this.formUserVer.controls.especialidad.setValue(row.especialidad);
    this.formUserVer.controls.user.setValue(row.user);
    this.formUserVer.controls.contraseña.setValue(row.contraseña);

  }

  transformarFecha(fechaNacimiento: Date) {
    return `${fechaNacimiento.getFullYear()}-${fechaNacimiento.getMonth() + 1}-${fechaNacimiento.getDate()}`
  }

  async registrar() {

    if (this.formUser.invalid) {
      return;
    }
    let datos = this.formUser.value
    let query = {
      nombre: datos.nombre,
      rol: datos.rol,
      apellidoPaterno: datos.apellidoPaterno,
      apellidoMaterno: datos.apellidoMaterno,
      dni: datos.dni,
      celular: datos.celular,
      email: datos.email,
      fechaNacimiento: datos.fechaNacimiento,
      direccion: datos.direccion,
      especialidad: datos.especialidad,
      contraseña: datos.contraseña,
      user:datos.user
    }

    debugger;
    try {

      let response = await this.userService.registrar(query).toPromise();
      this.formUser.reset();
      var dataMovimientoCaja = await this.userService.listar().toPromise();
      this.users = dataMovimientoCaja.data;

    } catch (err) {
      console.log(err);
    }
  }

  async modificar() {
    if (this.formUserModificar.invalid) {
      return;
    }
    let datos = this.formUserModificar.value
    let query = {
        nombre: datos.nombre,
        rol: datos.rol,
        apellidoPaterno: datos.apellidoPaterno,
        apellidoMaterno: datos.apellidoMaterno,
        dni: datos.dni,
        celular: datos.celular,
        email: datos.email,
        fechaNacimiento: datos.fechaNacimiento,
        direccion: datos.direccion,
        especialidad: datos.especialidad,
        contraseña: datos.contraseña,
      user:datos.user
    }

    try {

      let response = await this.userService.actualizar(this.userSeleccionada._id, query).toPromise();
      this.formUser.reset();
      var dataMovimientoCaja = await this.userService.listar().toPromise();
      this.users = dataMovimientoCaja.data;

    } catch (err) {
      console.log(err);
    }
  }
}