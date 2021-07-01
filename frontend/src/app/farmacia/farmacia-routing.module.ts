import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import{ pedidoComponent} from './pedido/pedido.component';

const routes: Routes = [
  {
    path: "pedido", component: pedidoComponent, data: { title: 'Pedidos' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmaciaRoutingModule { }
