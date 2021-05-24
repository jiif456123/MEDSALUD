import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {GestionarPservice } from 'Services/gestionarp.service';

@Component({
  selector: 'app-gestionar-citas',
  templateUrl: './gestionarp.component.html',
  styleUrls: ['./gestionarp.component.css'],
  providers: [GestionarPservice]
})
export class GestionarProveedorComponent implements OnInit {

  constructor(public gestionarpservice:GestionarPservice) { }

  ngOnInit(): void {
    this.getProveedor();
  }
  getProveedor() {
    this.gestionarpservice.getProveedor().subscribe(
      res =>{
        this.gestionarpservice.proveedor= res;
      },
      err => console.error(err)
    )
  }

  agregarProveedor(form:NgForm){
    this.gestionarpservice.createProveedor(form.value).subscribe(
      res =>{
          this.getProveedor();
      },
      err => console.error(err)
    )
  }

  
}
