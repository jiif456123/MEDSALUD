import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionarCajaComponent } from './gestionar-caja/gestionar-caja.component';
import { GestionarCitasComponent } from './gestionar-citas/gestionar-citas.component';
import { GestionarPerfilComponent } from '../farmacia/Gestionar Perfiles/gestionar-perfiles.component';
import { GestionarHistoriaComponent } from './gestionar-Historial Clinica/gestionar-historia.component';
import { GestionarPacienteComponent } from './gestionar-paciente/gestionar-paciente.component';
import { EspecialidadComponent } from '../../app/citas/GestEspecialidad/especialidad.component';
import { EspecialidadRegistradoComponent } from '../../app/citas/GestEspecialidad/reg-especialidad/gest-especialidad.component';
import { EspecialidadActualizadoComponent } from '../../app/citas/GestEspecialidad/actualizar-especialidad/actu-espe.component';
import { GestionarRecetaMedicaComponent } from './gestionar-receta-medica/gestionar-receta-medica.component';
import { RegGestionarRecetaMedicaComponent } from './gestionar-receta-medica/reg-gestionar-receta-medica/reg-gestionar-receta-medica.component';

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
    path: 'gestionar-citas', component: GestionarCitasComponent, data: { title: 'Gestionar Cita' }
  },
  {
    path: "gestionar-historia", component: GestionarHistoriaComponent, data: { title: 'Gestionar Historia' }
  },
  {
    path: "gestionar-paciente", component: GestionarPacienteComponent, data: { title: 'Gestionar Paciente' }
  },
  {
    path: "gestionar-caja", component: GestionarCajaComponent, data: { title: 'Gestionar Caja' }
  },
  {
    path: "gestionar-perfil", component: GestionarPerfilComponent, data: { title: 'Gestionar Historia' }
  },
  {
    path: "gestionar-receta-medica", component: GestionarRecetaMedicaComponent, data: { title: 'Gestionar Receta Medica' }
  },
  {
    path: "gestionar-receta-medica/registrar", component: RegGestionarRecetaMedicaComponent, data: { title: 'Gestionar Receta Medica' }
  }, 
  {
    path: "gestionar-receta-medica/:id", component: RegGestionarRecetaMedicaComponent, data: { title: 'Gestionar Receta Medica' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitasRoutingModule { }
