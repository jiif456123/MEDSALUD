import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { medicamentoComponent } from './Gestionar medicamento/medicamento.component';
import { FarmaciaRoutingModule } from './farmacia-routing.module';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovimientosComponent } from './Consultar Movimientos/movimientos.component';

@NgModule({
  declarations: [
    medicamentoComponent,
    MovimientosComponent
  ],
  imports: [
    CommonModule,
    FarmaciaRoutingModule,
    NgbPaginationModule,
    NgbAlertModule, 
    FormsModule, 
    ReactiveFormsModule,
    MatTabsModule
  ]
})
export class FarmaciaModule { }
