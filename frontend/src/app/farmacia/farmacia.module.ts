import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { medicamentoComponent } from './medicamento/medicamento.component';
import { FarmaciaRoutingModule } from './farmacia-routing.module';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    medicamentoComponent
  ],
  imports: [
    CommonModule,
    FarmaciaRoutingModule,
    NgbPaginationModule,
    NgbAlertModule, 
    FormsModule, ReactiveFormsModule
  ]
})
export class FarmaciaModule { }
