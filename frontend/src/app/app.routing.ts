import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {LoginGuard} from '../Services/inicarsesion.service'
const routes: Routes =[
  {
    path: '',
    component:LoginComponent
  },
  
  {

    path: '',
    redirectTo: 'categoria',
    pathMatch: 'full',
  }, {
    canActivate : [LoginGuard],
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
    
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path: '**',
    redirectTo: 'categoria'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
