import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing.module';
import { GestionarCitasComponent } from './gestionar-citas/gestionar-citas.component';
import { GestionarHistoriaComponent } from './gestionar-Historial Clinica/gestionar-historia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FilterPipe } from 'ngx-filter-pipe';
@NgModule({
  declarations: [GestionarCitasComponent,GestionarHistoriaComponent],
  imports: [
    CommonModule,
    CitasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    FilterPipeModule
  ]
})
export class CitasModule { }
