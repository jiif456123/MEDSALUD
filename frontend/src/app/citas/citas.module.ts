import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing.module';
import { GestionarCitasComponent } from './gestionar-citas/gestionar-citas.component';
import { GestionarPacienteComponent } from './gestionar-paciente/gestionar-paciente.component';


@NgModule({
  declarations: [GestionarCitasComponent, GestionarPacienteComponent],
  imports: [
    CommonModule,
    CitasRoutingModule
  ]
})
export class CitasModule { }
