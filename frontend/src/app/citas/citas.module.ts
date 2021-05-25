import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing.module';
import { GestionarCitasComponent } from './gestionar-citas/gestionar-citas.component';
import { GestionarPacienteComponent } from './gestionar-paciente/gestionar-paciente.component';
import { GestionarCajaComponent } from './gestionar-caja/gestionar-caja.component';


@NgModule({
  declarations: [GestionarCitasComponent, GestionarCajaComponent, GestionarPacienteComponent],
  imports: [
    CommonModule,
    CitasRoutingModule
  ]
})
export class CitasModule { }
