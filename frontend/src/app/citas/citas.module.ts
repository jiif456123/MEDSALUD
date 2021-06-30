import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitasRoutingModule } from './citas-routing.module';
import { GestionarCitasComponent } from './gestionar-citas/gestionar-citas.component';
import { GestionarHistoriaComponent } from './gestionar-Historial Clinica/gestionar-historia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { GestionarPerfilComponent } from 'app/farmacia/Gestionar Perfiles/gestionar-perfiles.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FilterPipe } from 'ngx-filter-pipe';
import { GestionarPacienteComponent } from './gestionar-paciente/gestionar-paciente.component';
import { GestionarCajaComponent } from './gestionar-caja/gestionar-caja.component';
import { EspecialidadRegistradoComponent } from '../../app/citas/GestEspecialidad/reg-especialidad/gest-especialidad.component';
import { EspecialidadComponent } from '../../app/citas/GestEspecialidad/especialidad.component';
import { EspecialidadActualizadoComponent } from '../../app/citas/GestEspecialidad/actualizar-especialidad/actu-espe.component';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { GestionarRecetaMedicaComponent } from './gestionar-receta-medica/gestionar-receta-medica.component';
import { RegGestionarRecetaMedicaComponent } from './gestionar-receta-medica/reg-gestionar-receta-medica/reg-gestionar-receta-medica.component';
import { DetalleGestionarRecetaMedicaComponent } from './gestionar-receta-medica/detalle-gestionar-receta-medica/detalle-gestionar-receta-medica.component';

@NgModule({
  declarations: [
    GestionarCitasComponent,
    GestionarCajaComponent,
    GestionarPacienteComponent,
    GestionarHistoriaComponent,
    GestionarPerfilComponent,
    EspecialidadComponent,
    EspecialidadRegistradoComponent,
    EspecialidadActualizadoComponent,
    GestionarRecetaMedicaComponent,
    RegGestionarRecetaMedicaComponent,
    DetalleGestionarRecetaMedicaComponent,
    RegGestionarRecetaMedicaComponent,
    DetalleGestionarRecetaMedicaComponent
  ],
  imports: [
    CommonModule,
    CitasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    FilterPipeModule,
    Ng2FilterPipeModule
  ],
  providers: [FilterPipe]
})
export class CitasModule { }
