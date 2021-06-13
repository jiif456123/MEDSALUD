import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionarProveedorComponent } from './gestionar-proveedor/gestionarp.component';
import { medicamentoComponent } from './medicamento/medicamento.component';

const routes: Routes = [
  {
    path: "gestionar-proveedor", component: GestionarProveedorComponent, data: { title: 'Gestionar Proveedor' }
  },
  {
    path: "gestionar-medicamentos", component: medicamentoComponent, data: { title: 'Gestionar Medicamentos' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmaciaRoutingModule { }