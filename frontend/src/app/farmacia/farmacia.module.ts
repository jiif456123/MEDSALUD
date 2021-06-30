import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FarmaciaRoutingModule } from './farmacia-routing.module';
import { GestionarCategoriaComponent } from '../farmacia/gestionarCategorias/gestionarCategorias.component';
import { GestionarOrdenCompraComponent } from '../farmacia/gestionarOrdenCompra/gestionarOrdencompra.component';


@NgModule({
  declarations: [
    GestionarCategoriaComponent,
    GestionarOrdenCompraComponent
    
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
    ReactiveFormsModule,
    

  ],

<<<<<<< HEAD
=======
  ],

>>>>>>> 4121220a906438f6c9387faee3613f77afc6e3e6
})
export class FarmaciaModule { }
