import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import {GestionarPservice } from 'Services/gestionarp.service';
import {Gestionarp,Estado} from '../../../models/gestionarp.model';
import { AlertaService } from 'Services/alerta.service';

@Component({
  selector: 'app-gestionar-citas',
  templateUrl: './gestionarp.component.html',
  styleUrls: ['./gestionarp.component.css','../farmacia.css'],
  providers: [GestionarPservice,AlertaService]
})

export class GestionarProveedorComponent implements OnInit {

  public pageSize = 7;
  public page;
  estados : Estado[]=[
    {
      estado:'Disponible' 
    },{
      estado:'No Disponible'
    }
  ]

  filter : 'all'|'active'|'donde'='all';

  constructor(public gestionarpservice:GestionarPservice,public alertaService:AlertaService) {
   }
  selectDispo='';
  public error = false;
  public error2 = false;
  public estado ="No Disponible";
  public estado2 ="Disponible";
  codigo_ciudad = '';
 public valorCiudad = '';
 telefono_final = "";
 telefono_auxi = "";

  log(x){console.log(x)}

  ngOnInit(): void {
    this.getProveedor();
  }

  getProveedor() {
    this.gestionarpservice.getProveedor().subscribe(
      res =>{
        this.gestionarpservice.proveedor= res;
        this.page=1;
      },
      err => console.error(err)
    )
    
  }
 

  radioChangeHandler(event: any){
    this.selectDispo = event.target.value;
  }

  agregarProveedor(form:NgForm){
    this.gestionarpservice.createProveedor(form.value).subscribe(
      res =>{
          this.getProveedor();
      },
      err => console.error(err)
    )
  }
  addAlerta(nombre: GestionarPservice){ 
    console.log(this.gestionarpservice.selectProveedor.nombre);
    this.alertaService.selectedAlerta.titulo = "Se registró un proveedor";
    this.alertaService.selectedAlerta.mensaje = nombre + " es nuestro nuevo proveedor";
    this.alertaService.createAlerta(this.alertaService.selectedAlerta).subscribe(
  );}

  actualizarProveedor(form:NgForm){
    this.gestionarpservice.updateProveedor(form.value).subscribe(
      res =>{
          this.getProveedor();
      },
      err => console.error(err)
      )
    }

    selectChangeHandler(event:any){
      this.codigo_ciudad = event.target.value;
      this.valorCiudad = this.codigo_ciudad;
    }

    getTelefono(event:any){
      this.telefono_auxi = event.target.value;
    }

    selectChangeHandler2(event:any){
      this.telefono_final = this.codigo_ciudad + this.telefono_auxi;
      this.gestionarpservice.selectProveedor.telefono = this.telefono_final;

    }

    getProveedo(proveedor:Gestionarp) {
      this.gestionarpservice.selectProveedor2 = proveedor;
    }

    resetForm(form:NgForm){
      form.reset();
    }

    validar(form:NgForm){
      if (form.invalid){
        this.error = true;
      }else{
        this.agregarProveedor(form);
        let element: HTMLElement =document.getElementById('ocultof') as HTMLElement;

         element.click();
      }
    }

    validar2(form:NgForm){
      if (form.invalid){
        this.error2 = true;
      }else{
        this.actualizarProveedor(form);
        let element: HTMLElement =document.getElementById('ocultof2') as HTMLElement;

         element.click();
      }
    }

    cerrarAlerta(){
      this.error = false;
      this.error2 = false;
    }

    cambiarEstado2(){
      if(this.gestionarpservice.selectProveedor2.estado=="No Disponible"){
        this.gestionarpservice.selectProveedor2.estado="Disponible";
      }
    }

    cambiarEstado(){
      if(this.gestionarpservice.selectProveedor2.estado=="Disponible"){
        this.gestionarpservice.selectProveedor2.estado="No Disponible";
      }
    }

    selectEstado(){
      if(this.estado=="No Disponible"){
        this.estado="Disponible";
      }
    }

    selectEstado2(){
      if(this.estado2=="No Disponible"){
        this.estado2="Disponible";
      }
    }
    signupForm : FormGroup

}
