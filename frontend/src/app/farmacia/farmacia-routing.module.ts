import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MovimientosComponent } from './Consultar Movimientos/movimientos.component';
import { medicamentoComponent } from './Gestionar medicamento/medicamento.component';
import { GestionarProveedorComponent } from './gestionar-proveedor/gestionarp.component';
import { GestionarCategoriaComponent } from '../farmacia/gestionarCategorias/gestionarCategorias.component';
import { GestionarOrdenCompraComponent } from '../farmacia/gestionarOrdenCompra/gestionarOrdencompra.component';
import {RegistrarMedicoComponent} from '../farmacia/equiposMedicos/registrarEquipoMedico/registrarEquipoMedico';
import {EquiposMedicosComponent} from './equiposMedicos/ListarEquipoMedico/equiposMedicos.component';
import {ActualizarEMComponent} from '../farmacia/equiposMedicos/actualizarEquipoMedico/actualizarEquipoMedico';
import {EjemplaEquipoMedicoComponent} from './ejemplarEquipoMedico/listarEquipoMedico/ejemplaresEquipoMedico';
import { Dashboard } from '../farmacia/dashboard/dashboard.component';
import { inventarioComponent } from './Inventario/inventario.component';

import { pedidoComponent } from './pedido/pedido.component';

const routes: Routes = [
  {
    path: 'EquipoMedico', component: EquiposMedicosComponent, data: { title: 'Gestionar Equipo Medico' }
  },
  {
    path: 'RegistrarEquipoMedico', component: RegistrarMedicoComponent
  },
  {
    path: 'ActualizarEquipoMedico/:id', component: ActualizarEMComponent
  },
  {
    path: 'EjemplaresEquipoMedico/:id', component: EjemplaEquipoMedicoComponent
  },
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
  },
  {
    path: "gestionar-ordenCompra", component: GestionarOrdenCompraComponent, data: { title: 'Gestionar OrdenCompra' }
  },
  {
    path: "dashboard", component: Dashboard, data: { title: 'Dashboard' }
  },
  {
    path: "gestionar-inventario", component: inventarioComponent, data: { title: 'Gestionar Inventario' }
  },
  {
    path: "pedido", component: pedidoComponent, data: { title: 'Pedidos' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmaciaRoutingModule { }
