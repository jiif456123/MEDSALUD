import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { medicamentoComponent } from './Gestionar medicamento/medicamento.component';
import { FarmaciaRoutingModule } from './farmacia-routing.module';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { MovimientosComponent } from './Consultar Movimientos/movimientos.component';
import { GestionarCategoriaComponent } from '../farmacia/gestionarCategorias/gestionarCategorias.component';
import { GestionarProveedorComponent } from './gestionar-proveedor/gestionarp.component';
import { GestionarOrdenCompraComponent } from '../farmacia/gestionarOrdenCompra/gestionarOrdencompra.component';
import {RegistrarMedicoComponent} from '../farmacia/equiposMedicos/registrarEquipoMedico/registrarEquipoMedico';
import {EquiposMedicosComponent} from './equiposMedicos/ListarEquipoMedico/equiposMedicos.component';
import {ActualizarEMComponent} from '../farmacia/equiposMedicos/actualizarEquipoMedico/actualizarEquipoMedico';
import {EjemplaEquipoMedicoComponent} from './ejemplarEquipoMedico/listarEquipoMedico/ejemplaresEquipoMedico';
import { Dashboard } from '../farmacia/dashboard/dashboard.component';
//import {Chart} from 'chart.js';



@NgModule({
  declarations: [
    medicamentoComponent,
    MovimientosComponent,
    GestionarProveedorComponent,
    GestionarCategoriaComponent,
    GestionarCategoriaComponent,
    GestionarOrdenCompraComponent,
    RegistrarMedicoComponent,
    EquiposMedicosComponent,
    ActualizarEMComponent,
    EjemplaEquipoMedicoComponent,    
    Dashboard,
  ],

  imports: [
    CommonModule,
    FarmaciaRoutingModule,
    NgbPaginationModule,
    NgbAlertModule, 
    FormsModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSelectModule
   //Chart

  ],
})
export class FarmaciaModule { }
