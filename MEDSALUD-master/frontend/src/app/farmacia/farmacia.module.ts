import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FarmaciaRoutingModule } from './farmacia-routing.module';
import {RegistrarMedicoComponent} from '../farmacia/equiposMedicos/registrarEquipoMedico/registrarEquipoMedico';
import {EquiposMedicosComponent} from './equiposMedicos/ListarEquipoMedico/equiposMedicos.component';
import {ActualizarEMComponent} from '../farmacia/equiposMedicos/actualizarEquipoMedico/actualizarEquipoMedico';
import {EjemplaEquipoMedicoComponent} from './ejemplarEquipoMedico/listarEquipoMedico/ejemplaresEquipoMedico';
@NgModule({
  declarations: [
    RegistrarMedicoComponent,
    EquiposMedicosComponent,
    ActualizarEMComponent,
    EjemplaEquipoMedicoComponent
  ],
  imports: [
    CommonModule,
    FarmaciaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FarmaciaModule { }
