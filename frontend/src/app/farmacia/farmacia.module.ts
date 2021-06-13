import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { medicamentoComponent } from './medicamento/medicamento.component';
import { FarmaciaRoutingModule } from './farmacia-routing.module';
import { GestionarProveedorComponent } from './gestionar-proveedor/gestionarp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    medicamentoComponent,
    GestionarProveedorComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    FarmaciaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbAlertModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FarmaciaModule { }
