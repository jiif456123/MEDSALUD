import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  
  //{ path: '/citas/gestionar-historia', title: 'Gestionar Historia Clinica',  icon:'pe-7s-news-paper', class: '' },
  { path: '/farmacia/EquipoMedico', title: 'Equipos Medicos',  icon:'pe-7s-news-paper', class: '' },
  { path: '/citas/gestionar-perfil', title: 'Gestionar Perfil',  icon:'pe-7s-news-paper', class: '' },
  { path: "/farmacia/gestionar-proveedor", title: 'Gestionar Proveedor', icon: 'pe-7s-news-paper', class: '' },
  { path: '/farmacia/gestionarMedicamentos', title: 'Gestionar Medicamento', icon: 'pe-7s-news-paper', class: '' },
  { path: '/farmacia/gestionar-categoriaM', title: 'Gestionar Categorias', icon: 'pe-7s-notebook', class: '' },
  { path: '/farmacia/consultarMovimientos', title: 'Consultar Movimientos',  icon:'pe-7s-news-paper', class: '' },
  { path: '/farmacia/gestionar-ordenCompra', title: 'Gestionar Orden De Compra',  icon:'pe-7s-notebook', class: '' },
  { path: '/farmacia/gestionar-inventario', title: 'Gestionar Inventario',  icon:'pe-7s-news-paper', class: '' },
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
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
