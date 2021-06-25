import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/categoria', title: 'Categorias',  icon:'pe-7s-news-paper', class: '' },
    { path: '/farmacia/gestionar-categoriaM', title: 'Gestionar Categorias',  icon:'pe-7s-notebook', class: '' },
    { path: '/farmacia/gestionar-ordenCompra', title: 'Gestionar Orden De Compra',  icon:'pe-7s-notebook', class: '' },
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
