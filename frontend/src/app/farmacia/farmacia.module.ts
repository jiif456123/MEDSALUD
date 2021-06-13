import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmaciaRoutingModule } from './farmacia-routing.module';
import { GestionarProveedorComponent } from './gestionar-proveedor/gestionarp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [GestionarProveedorComponent],
  imports: [
    FormsModule,
    CommonModule,
    FarmaciaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FarmaciaModule { }
