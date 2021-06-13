import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { medicamentoComponent } from './medicamento/medicamento.component';

const routes: Routes = [
  {
    path: "gestionar-medicamentos", component: medicamentoComponent, data: { title: 'Gestionar Medicamentos' }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmaciaRoutingModule { }
