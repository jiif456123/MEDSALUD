import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrarMedicoComponent} from '../farmacia/equiposMedicos/registrarEquipoMedico/registrarEquipoMedico';
import {EquiposMedicosComponent} from './equiposMedicos/ListarEquipoMedico/equiposMedicos.component';
import {ActualizarEMComponent} from '../farmacia/equiposMedicos/actualizarEquipoMedico/actualizarEquipoMedico';
import {EjemplaEquipoMedicoComponent} from './ejemplarEquipoMedico/listarEquipoMedico/ejemplaresEquipoMedico';
const routes: Routes = [
  {
    path: 'EquipoMedico',
    component: EquiposMedicosComponent,
    data: {
      title: 'Gestionar Equipo Medico'
    }
  },
  {
    path:'RegistrarEquipoMedico',
    component: RegistrarMedicoComponent
  },
  {
    path:'ActualizarEquipoMedico/:id',
    component: ActualizarEMComponent
  },
  {
    path:'EjemplaresEquipoMedico/:id',
    component: EjemplaEquipoMedicoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmaciaRoutingModule { }

/*

  {
    path: 'editarE/:id',
    component: RegistrarEgresosComponent
  },

*/