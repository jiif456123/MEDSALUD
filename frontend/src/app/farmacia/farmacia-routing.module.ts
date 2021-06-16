import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovimientosComponent } from './Consultar Movimientos/movimientos.component';
import { medicamentoComponent } from './Gestionar medicamento/medicamento.component';

const routes: Routes = [
  {
    path: "gestionarMedicamentos", component: medicamentoComponent, data: { title: 'Gestionar Medicamentos' }
   
  },
  {
    path: "consultarMovimientos", component: MovimientosComponent, data: { title: 'Consultar Movimientos' }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmaciaRoutingModule { }
