import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionarProveedorComponent } from './gestionar-proveedor/gestionarp.component';

const routes: Routes = [
  {
    path: "gestionar-proveedor", component: GestionarProveedorComponent, data: { title: 'Gestionar Proveedor' }
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmaciaRoutingModule { }