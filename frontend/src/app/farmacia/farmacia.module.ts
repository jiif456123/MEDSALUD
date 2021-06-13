import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmaciaRoutingModule } from './farmacia-routing.module';
import { GestionarCategoriaComponent } from '../farmacia/gestionarCategorias/gestionarCategorias.component';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GestionarCategoriaComponent
  ],
  imports: [
    CommonModule,
    FarmaciaRoutingModule,
    NgbPaginationModule,
    NgbAlertModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class FarmaciaModule { }
