import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionarCajaComponent } from './gestionar-caja/gestionar-caja.component';
import { GestionarCitasComponent } from './gestionar-citas/gestionar-citas.component';
import { GestionarPerfilComponent } from '../farmacia/Gestionar Perfiles/gestionar-perfiles.component';
import { GestionarHistoriaComponent } from './gestionar-Historial Clinica/gestionar-historia.component';
import { GestionarPacienteComponent } from './gestionar-paciente/gestionar-paciente.component';
import { EspecialidadComponent } from './GestEspecialidad/especialidad.component';
import { EspecialidadRegistradoComponent } from './GestEspecialidad/reg-especialidad/gest-especialidad.component';
import { EspecialidadActualizadoComponent } from './GestEspecialidad/actualizar-especialidad/actu-espe.component';
import { CambiarContraComponent } from './cambiarContraseña/cambiarContra.component';


const routes: Routes = [

  {
    path: 'gestionar-especialidad', component: EspecialidadComponent, data: { title: 'Gestionar Especialidad' }
  },
  {
    path: 'gestionar-especialidad/registrado', component: EspecialidadRegistradoComponent, data: { title: 'Registrar Especialidad' }
  },
  {
    path: 'gestionar-especialidad/actualizado/:id', component: EspecialidadActualizadoComponent, data: { title: 'Actualizar Especialidad' }
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
    path: "cambiar-contra", component: CambiarContraComponent, data: { title: 'Cambiar Contraseña' }
  },
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitasRoutingModule { }
