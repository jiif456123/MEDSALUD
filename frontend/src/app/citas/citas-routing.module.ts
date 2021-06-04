import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionarCitasComponent } from './gestionar-citas/gestionar-citas.component';
import { GestionarHistoriaComponent } from './gestionar-Historial Clinica/gestionar-historia.component';
const routes: Routes = [
  {
    path: "gestionar-citas", component: GestionarCitasComponent, data: { title: 'Gestionar Cita' }
  },
  {
    path: "gestionar-historia", component: GestionarHistoriaComponent, data: { title: 'Gestionar Historia' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitasRoutingModule { }
