import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitasRoutingModule } from './citas-routing.module';
import { GestionarCitasComponent } from './gestionar-citas/gestionar-citas.component';
import { EspecialidadRegistradoComponent } from '../../app/citas/GestEspecialidad/reg-especialidad/gest-especialidad.component';
import { EspecialidadComponent } from '../../app/citas/GestEspecialidad/especialidad.component';
import { FilterPipeModule, FilterPipe } from 'ngx-filter-pipe';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { FormsModule,ReactiveFormsModule, } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EspecialidadActualizadoComponent } from '../../app/citas/GestEspecialidad/actualizar-especialidad/actu-espe.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [EspecialidadComponent,EspecialidadRegistradoComponent,GestionarCitasComponent, EspecialidadActualizadoComponent],
  imports: [
    CommonModule,CitasRoutingModule, Ng2FilterPipeModule,FormsModule,ReactiveFormsModule,Ng2SearchPipeModule,
    
  ],
  providers:[ FilterPipe]
  
})
export class CitasModule {}
