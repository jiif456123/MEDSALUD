import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/categoria', title: 'Categorias', icon: 'pe-7s-news-paper', class: '' },
  { path: '/citas/gestionar-historia', title: 'Gestionar Historia Clinica', icon: 'pe-7s-news-paper', class: '' },
  { path: '/citas/gestionar-citas', title: 'Gestionar Citas', icon: 'pe-7s-news-paper', class: '' },
  { path: '/citas/gestionar-caja', title: 'Gestionar Caja', icon: 'pe-7s-news-paper', class: '' },
  { path: '/citas/gestionar-perfil', title: 'Gestionar Perfiles', icon: 'pe-7s-news-paper', class: '' },
  { path: '/citas/gestionar-especialidad', title: 'Gestionar Especialidad', icon: 'pe-7s-news-paper', class: '' },
  { path: '/citas/cambiar-contra', title: 'Cambiar Contraseña', icon: 'pe-7s-news-paper', class: '' },
  { path: '/citas/gestionar-perfil', title: 'Gestionar Perfil', icon: 'pe-7s-news-paper', class: '' },
  { path: '/citas/gestionar-especialidad', title: 'GestionarEspecialidad', icon: 'pe-7s-news-paper', class: '' },
  { path: '/citas/chat-bot', title: 'Chat Bot', icon: 'pe-7s-news-paper', class: '' },
  { path: '/citas/consultar-agenda', title: 'Consultar agenda', icon: 'pe-7s-news-paper', class: '' },
  { path: '/citas/consultar-horario', title: 'Consultar horario', icon: 'pe-7s-news-paper', class: '' },
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
