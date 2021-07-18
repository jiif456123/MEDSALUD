import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
 // { path: '/categoria', title: 'Categorias', icon: 'pe-7s-news-paper', class: '' },
  /*{ path: '/citas/gestionar-historia', title: 'Gestionar Historia Clinica', icon: 'pe-7s-news-paper', class: '' },
  { path: '/citas/gestionar-citas', title: 'Gestionar Citas', icon: 'pe-7s-news-paper', class: '' },
  { path: '/citas/gestionar-caja', title: 'Gestionar Caja', icon: 'pe-7s-news-paper', class: '' },
  { path: '/citas/gestionar-perfil', title: 'Gestionar Perfiles', icon: 'pe-7s-news-paper', class: '' },
  { path: '/citas/gestionar-especialidad', title: 'Gestionar Especialidad', icon: 'pe-7s-news-paper', class: '' },
  { path: '/citas/cambiar-contra', title: 'Cambiar Contraseña', icon: 'pe-7s-news-paper', class: '' },
  { path: '/citas/consultar-agenda', title: 'Consultar agenda', icon: 'pe-7s-news-paper', class: '' },
  { path: '/citas/consultar-horario', title: 'Consultar horario', icon: 'pe-7s-news-paper', class: '' },
  { path: '/citas/gestionar-receta-medica', title: 'Gestionar Receta Medica', icon: 'pe-7s-news-paper', class: '' },
  { path: '/citas/gestionar-paciente', title: 'Gestionar Paciente', icon: 'pe-7s-news-paper', class: '' },
  { path: '/citas/consultar-servicio', title: 'Consultar servicio', icon: 'pe-7s-news-paper', class: '' },
  { path: '/citas/reporte-general', title: 'Reporte general', icon: 'pe-7s-news-paper', class: '' },
  { path: '/citas/consultar-receta-medica', title: 'Consultar receta medica', icon: 'pe-7s-news-paper', class: '' },  
  { path: '/citas/gestionar-perfil', title: 'Gestionar Perfil',  icon:'pe-7s-news-paper', class: '' },*/

  { path: '/farmacia/dashboard', title: 'Dashboard',  icon:'pe-7s-graph1', class: '' },
  { path: '/farmacia/gestionar-categoriaM', title: 'Gestionar Categorias', icon: 'pe-7s-news-paper', class: '' },
  { path: '/farmacia/gestionarMedicamentos', title: 'Gestionar Medicamento', icon: 'pe-7s-news-paper', class: '' },
  { path: '/farmacia/EquipoMedico', title: 'Equipos Medicos',  icon:'pe-7s-news-paper', class: '' },
  { path: "/farmacia/gestionar-proveedor", title: 'Gestionar Proveedor', icon: 'pe-7s-news-paper', class: '' },
  { path: '/farmacia/gestionar-ordenCompra', title: 'Gestionar Orden De Compra',  icon:'pe-7s-news-paper', class: '' },
  { path: '/farmacia/consultarMovimientos', title: 'Consultar Movimientos',  icon:'pe-7s-news-paper', class: '' },
  { path: '/farmacia/gestionar-inventario', title: 'Gestionar Inventario',  icon:'pe-7s-news-paper', class: '' },
  { path: '/farmacia/pedido', title: 'Pedido',  icon:'pe-7s-news-paper', class: '' },  
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.menuItems.push()
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
