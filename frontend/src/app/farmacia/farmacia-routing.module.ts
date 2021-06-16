import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { MovimientosComponent } from './Consultar Movimientos/movimientos.component';
import { medicamentoComponent } from './Gestionar medicamento/medicamento.component';

const routes: Routes = [
  {
    path: "gestionarMedicamentos", component: medicamentoComponent, data: { title: 'Gestionar Medicamentos' }
   
  },
  {
    path: "consultarMovimientos", component: MovimientosComponent, data: { title: 'Consultar Movimientos' }
=======
import { GestionarProveedorComponent } from './gestionar-proveedor/gestionarp.component';
import { medicamentoComponent } from './medicamento/medicamento.component';
import { GestionarCategoriaComponent } from '../farmacia/gestionarCategorias/gestionarCategorias.component';

const routes: Routes = [
  {
    path: "gestionar-proveedor", component: GestionarProveedorComponent, data: { title: 'Gestionar Proveedor' }
  },
  {
    path: "gestionar-medicamentos", component: medicamentoComponent, data: { title: 'Gestionar Medicamentos' }
>>>>>>> 6639117f549a24249cf9d84a1db5a66f839d7d14
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