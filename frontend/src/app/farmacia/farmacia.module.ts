import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
//import {MatTabsModule} from '@angular/material/tabs';
import{ pedidoComponent} from './pedido/pedido.component';
import { FarmaciaRoutingModule } from './farmacia-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { Ng2SearchPipeModule } from "ng2-search-filter";

@NgModule({
  declarations: [
    pedidoComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    FarmaciaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // NgbPaginationModule,
    // NgbAlertModule, 
    FormsModule, 
    ReactiveFormsModule,
    //MatTabsModule,
    ReactiveFormsModule
  ]
})
export class FarmaciaModule { }
