import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionarCitasComponent } from './gestionar-citas/gestionar-citas.component';
import { GestionarPacienteComponent } from './gestionar-paciente/gestionar-paciente.component';

const routes: Routes = [
  {
    path: "gestionar-citas", component: GestionarCitasComponent, data: { title: 'Gestionar Cita' }
  },
  {
    path: "gestionar-paciente", component: GestionarPacienteComponent, data: { title: 'Gestionar Paciente' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitasRoutingModule { }
