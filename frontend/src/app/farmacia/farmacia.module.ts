import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { medicamentoComponent } from './Gestionar medicamento/medicamento.component';
import { FarmaciaRoutingModule } from './farmacia-routing.module';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovimientosComponent } from './Consultar Movimientos/movimientos.component';
import { GestionarCategoriaComponent } from '../farmacia/gestionarCategorias/gestionarCategorias.component';
import { GestionarProveedorComponent } from './gestionar-proveedor/gestionarp.component';
import { GestionarOrdenCompraComponent } from '../farmacia/gestionarOrdenCompra/gestionarOrdencompra.component';

@NgModule({
  declarations: [
    medicamentoComponent,
    MovimientosComponent,
    GestionarProveedorComponent,
    GestionarCategoriaComponent,
    GestionarCategoriaComponent,
    GestionarOrdenCompraComponent],

  imports: [
    FormsModule,
    CommonModule,
    FarmaciaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbAlertModule, 
    FormsModule, 
    ReactiveFormsModule,
    MatTabsModule,
    ReactiveFormsModule

  ],

})
export class FarmaciaModule { }
