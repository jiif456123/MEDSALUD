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
import { CambiarContraComponent } from './cambiarContraseña/cambiarContra.component';
import { ConsultarAgendaComponent } from './consultar-agenda/consultar-agenda.component';
import { ConsultarHorarioComponent } from './consultar-horario/consultar-horario.component';
import { GestionarRecetaMedicaComponent } from './gestionar-receta-medica/gestionar-receta-medica.component';
import { RegGestionarRecetaMedicaComponent } from './gestionar-receta-medica/reg-gestionar-receta-medica/reg-gestionar-receta-medica.component';
import { DetalleGestionarRecetaMedicaComponent } from './gestionar-receta-medica/detalle-gestionar-receta-medica/detalle-gestionar-receta-medica.component';
import { ReporteGeneralComponent } from './reporte-general/reporte-general.component';
import { ConsultarServicioComponent } from './consultar-servicio/consultar-servicio.component';
import { ConsultarRecetaMedicaComponent } from './consultar-receta-medica/consultar-receta-medica.component';
import { DetalleConsultarRecetaMedComponent } from './consultar-receta-medica/detalle-consultar-receta-med/detalle-consultar-receta-med.component';

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
    path: "cambiar-contra", component: CambiarContraComponent, data: { title: 'Cambiar Contraseña' }
  },
  {
    path: "consultar-agenda", component: ConsultarAgendaComponent, data: { title: 'Consultar agenda' }
  },
  {
    path: "consultar-horario", component: ConsultarHorarioComponent, data: { title: 'Consultar horario' }
  },
  {
    path: "gestionar-receta-medica", component: GestionarRecetaMedicaComponent, data: { title: 'Gestionar Receta Medica' }
  },
  {
    path: "gestionar-receta-medica/registrar", component: RegGestionarRecetaMedicaComponent, data: { title: 'Gestionar Receta Medica' }
  },
  {
    path: "gestionar-receta-medica/:id", component: DetalleGestionarRecetaMedicaComponent, data: { title: 'Gestionar Receta Medica' }
  },
  {
    path: "reporte-general", component: ReporteGeneralComponent, data: { title: 'Reporte General' }
  },
  {
    path: "consultar-servicio", component: ConsultarServicioComponent, data: { title: 'Consultar servicio' }
  },
  {
    path: "consultar-receta-medica", component: ConsultarRecetaMedicaComponent, data: { title: 'Consultar Receta Medica' }
  },
  {
    path: "consultar-receta-medica/:id", component: DetalleConsultarRecetaMedComponent, data: { title: 'Consultar Receta Medica' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitasRoutingModule { }
