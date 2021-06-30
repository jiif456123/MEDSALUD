import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CambiarContraComponent } from './cambiarContraseña/cambiarContra.component';

import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { ConsultarHorarioComponent } from './consultar-horario/consultar-horario.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ConsultarAgendaComponent } from './consultar-agenda/consultar-agenda.component';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/daygrid';

FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin
]);

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
    CambiarContraComponent,
    ChatBotComponent,
    ConsultarHorarioComponent,
    ConsultarAgendaComponent,
  ],
  imports: [
    CommonModule,
    CitasRoutingModule,
    
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    FilterPipeModule,
    Ng2FilterPipeModule,
    FullCalendarModule
  ],
  providers: [
    FilterPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CitasModule { }
