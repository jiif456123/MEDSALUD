import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Historia } from '../models/historia.model';
import { HistoriaService } from '../services/historia.service';
import { FilterPipe } from 'ngx-filter-pipe';
@Component({
  selector: 'app-gestionar-historia',
  templateUrl: './gestionar-historia.component.html',
  styleUrls: ['./gestionar-historia.component.css'],
  providers: [DatePipe]
})
export class GestionarHistoriaComponent implements OnInit {
  @ViewChild('modalRegistrar') modalRegistrar: ElementRef;
  @ViewChild('modalModificar') modalModificar: ElementRef;

  formHistoria: FormGroup;
  formHistoriaModificar: FormGroup;

  filtro = "";

  historias: Historia[] = []
  historiaSeleccionada: Historia;
  public historia: Historia = new Historia();
  constructor(
    private historiaService: HistoriaService,
    private pipe: FilterPipe,
    private fb: FormBuilder,
    private datePipe: DatePipe
  ) { }

  async ngOnInit(): Promise<void> {
    var data = await this.historiaService.listar().toPromise();
    this.historias = data.data
    this.formHistoria = this.fb.group({
      medico: ['', [Validators.required]],
      especialidad: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      peso: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
      altura: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
      tension: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
      alergias: ['', [Validators.required]],
      antecedentes: ['', [Validators.required]],
      historia: ['', [Validators.required]],
      diagnostico: ['', [Validators.required]],
    })

    this.formHistoriaModificar = this.fb.group({
        medico: ['', [Validators.required]],
        especialidad: ['', [Validators.required]],
        fecha: ['', [Validators.required]],
        peso: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
        altura: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
        tension: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
        alergias: ['', [Validators.required]],
        antecedentes: ['', [Validators.required]],
        historia: ['', [Validators.required]],
        diagnostico: ['', [Validators.required]],
    })

  }

  abrirModal() {
    this.modalRegistrar.nativeElement.click();
  }

  abrirModalModificar(row: Historia) {
    this.modalModificar.nativeElement.click();
    this.historiaSeleccionada = row;
    this.formHistoriaModificar.controls.medico.setValue(row.medico);
    this.formHistoriaModificar.controls.especialidad.setValue(row.especialidad);
    this.formHistoriaModificar.controls.fecha.setValue(this.datePipe.transform(row.fecha, 'yyyy-MM-dd'));
    this.formHistoriaModificar.controls.peso.setValue(row.peso);
    this.formHistoriaModificar.controls.altura.setValue(row.altura);
    this.formHistoriaModificar.controls.tension.setValue(row.tension);
    this.formHistoriaModificar.controls.alergias.setValue(row.alergias);
    this.formHistoriaModificar.controls.antecedentes.setValue(row.antecedentes);
    this.formHistoriaModificar.controls.historia.setValue(row.historia);
    this.formHistoriaModificar.controls.diagnostico.setValue(row.diagnostico);

  }

  transformarFecha(fecha: Date) {
    return `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}`
  }

  async registrar() {

    if (this.formHistoria.invalid) {
      return;
    }
    let datos = this.formHistoria.value
    let query = {
      medico: datos.medico,
      especialidad: datos.especialidad,
      fecha: datos.fecha,
      peso: datos.peso,
      altura: datos.altura,
      tension: datos.tension,
      alergias: datos.alergias,
      antecedentes: datos.antecedentes,
      historia: datos.historia,
      diagnostico: datos.diagnostico
    }

    debugger;
    try {

      let response = await this.historiaService.registrar(query).toPromise();
      this.formHistoria.reset();
      var dataMovimientoCaja = await this.historiaService.listar().toPromise();
      this.historias = dataMovimientoCaja.data;

    } catch (err) {
      console.log(err);
    }
  }

  async modificar() {
    if (this.formHistoriaModificar.invalid) {
      return;
    }
    let datos = this.formHistoriaModificar.value
    let query = {
        medico: datos.medico,
        especialidad: datos.especialidad,
        fecha: datos.fecha,
        peso: datos.peso,
        altura: datos.altura,
        tension: datos.tension,
        alergias: datos.alergias,
        antecedentes: datos.antecedentes,
        historia: datos.historia,
        diagnostico: datos.diagnostico
    }

    try {

      let response = await this.historiaService.actualizar(this.historiaSeleccionada._id, query).toPromise();
      this.formHistoria.reset();
      var dataMovimientoCaja = await this.historiaService.listar().toPromise();
      this.historias = dataMovimientoCaja.data;

    } catch (err) {
      console.log(err);
    }
  }
}