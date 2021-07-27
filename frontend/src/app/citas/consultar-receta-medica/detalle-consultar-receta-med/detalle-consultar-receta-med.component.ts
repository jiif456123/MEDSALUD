import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DetalleRecetaMedica } from 'app/citas/models/detalle-receta-medica.model';
import { RecetaMedica } from 'app/citas/models/receta-medica.model';
import { RectaMedicaService } from 'app/citas/services/recta-medica.service';

@Component({
  selector: 'app-detalle-consultar-receta-med',
  templateUrl: './detalle-consultar-receta-med.component.html',
  styleUrls: ['./detalle-consultar-receta-med.component.css']
})
export class DetalleConsultarRecetaMedComponent implements OnInit {

  id;
  formRegistrar: FormGroup;
  medicamentos: DetalleRecetaMedica[] = [];

  recetaMedica: RecetaMedica
  constructor(private route: ActivatedRoute,
    private recMedicaService: RectaMedicaService,
    private fb: FormBuilder,

    ) {}

  async ngOnInit(): Promise<void> {
    this.formRegistrar = this.fb.group({
      dni: ['', [Validators.required]],
      nombrePaciente: [''],
      indicacion: [''],
    })

    this.id = this.route.snapshot.paramMap.get('id');
    var dataPacientes = await this.recMedicaService.listarId(this.id).toPromise();
    this.recetaMedica = dataPacientes.data;
    this.medicamentos = this.recetaMedica.medicina;
    this.llenarForm();
  }

  llenarForm(){
    this.formRegistrar.controls.dni.setValue(this.recetaMedica.paciente.dni);
    this.formRegistrar.controls.nombrePaciente.setValue(this.recetaMedica.paciente.nombre + ' ' + this.recetaMedica.paciente.apellidoPaterno);
    this.formRegistrar.controls.indicacion.setValue(this.recetaMedica.indicacion);

  }
}
