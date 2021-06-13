import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EspecialidadComponent} from '../../app/citas/GestEspecialidad/especialidad.component';
import {EspecialidadRegistradoComponent} from '../../app/citas/GestEspecialidad/reg-especialidad/gest-especialidad.component';
import { GestionarCitasComponent } from './gestionar-citas/gestionar-citas.component';
import {EspecialidadActualizadoComponent} from '../../app/citas/GestEspecialidad/actualizar-especialidad/actu-espe.component';

const routes: Routes = [
 
  {
    path: 'gestionar-especialidad', component: EspecialidadComponent, data: { title: 'Gestionar Especialidad' }
  },
  {
    path: 'gestionar-especialidad/registrado', component: EspecialidadRegistradoComponent, data: { title: 'Gestionar Especialidad Registrado' }
  },
  {
    path: 'gestionar-especialidad/actualizado/:id', component: EspecialidadActualizadoComponent, data: { title: 'Actualizar Especialidad Actualizar' }
  },
  {
    path: 'gestionarcitas', component: GestionarCitasComponent, data: { title: 'Gestionar Cita' }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitasRoutingModule { }
