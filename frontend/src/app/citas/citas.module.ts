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

import { EspecialidadComponent } from './GestEspecialidad/especialidad.component';

import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CambiarContraComponent } from './cambiarContraseña/cambiarContra.component';


@NgModule({
  declarations: [
    GestionarCitasComponent,
    GestionarCajaComponent,
    GestionarPacienteComponent,
    GestionarHistoriaComponent,
    GestionarPerfilComponent,
    EspecialidadComponent,
    CambiarContraComponent
    
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
