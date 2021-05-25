import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionarCajaComponent } from './gestionar-caja/gestionar-caja.component';
import { GestionarCitasComponent } from './gestionar-citas/gestionar-citas.component';
import { GestionarPacienteComponent } from './gestionar-paciente/gestionar-paciente.component';

const routes: Routes = [
  {
    path: "gestionar-citas", component: GestionarCitasComponent, data: { title: 'Gestionar Cita' }
  },
  {
    path: "gestionar-paciente", component: GestionarPacienteComponent, data: { title: 'Gestionar Paciente' }
  },
  {
    path: "gestionar-caja", component: GestionarCajaComponent, data: { title: 'Gestionar Caja' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitasRoutingModule { }
