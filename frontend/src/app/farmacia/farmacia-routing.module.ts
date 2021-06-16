import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovimientosComponent } from './Consultar Movimientos/movimientos.component';
import { medicamentoComponent } from './Gestionar medicamento/medicamento.component';
import { GestionarProveedorComponent } from './gestionar-proveedor/gestionarp.component';
import { GestionarCategoriaComponent } from '../farmacia/gestionarCategorias/gestionarCategorias.component';

const routes: Routes = [
  {
    path: "gestionarMedicamentos", component: medicamentoComponent, data: { title: 'Gestionar Medicamentos' }
   
  },
  {
    path: "gestionar-proveedor", component: GestionarProveedorComponent, data: { title: 'Gestionar Proveedor' }
  },
  {
    path: "consultarMovimientos", component: MovimientosComponent, data: { title: 'Consultar Movimientos' }
  },
  {
    path: "gestionar-proveedor", component: GestionarProveedorComponent, data: { title: 'Gestionar Proveedor' }
  },
  {
    path: "gestionar-categoriaM", component: GestionarCategoriaComponent, data: { title: 'Gestionar Categoria' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmaciaRoutingModule { }