import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { medicamentoComponent } from './Gestionar medicamento/medicamento.component';
import { FarmaciaRoutingModule } from './farmacia-routing.module';
<<<<<<< HEAD
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovimientosComponent } from './Consultar Movimientos/movimientos.component';
=======
import { GestionarProveedorComponent } from './gestionar-proveedor/gestionarp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { GestionarCategoriaComponent } from '../farmacia/gestionarCategorias/gestionarCategorias.component';

>>>>>>> 6639117f549a24249cf9d84a1db5a66f839d7d14

@NgModule({
  declarations: [
    medicamentoComponent,
<<<<<<< HEAD
    MovimientosComponent
=======
    GestionarProveedorComponent,
    GestionarCategoriaComponent
>>>>>>> 6639117f549a24249cf9d84a1db5a66f839d7d14
  ],
  imports: [
    FormsModule,
    CommonModule,
    FarmaciaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
<<<<<<< HEAD
    NgbAlertModule, 
    FormsModule, 
    ReactiveFormsModule,
    MatTabsModule
=======
    NgbAlertModule,
    FormsModule,
    ReactiveFormsModule
>>>>>>> 6639117f549a24249cf9d84a1db5a66f839d7d14
  ]
})
export class FarmaciaModule { }
