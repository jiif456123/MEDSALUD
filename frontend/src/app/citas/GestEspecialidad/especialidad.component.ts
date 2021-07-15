import { Component, OnInit, NgModule, ElementRef, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2'
import { FilterPipe } from 'ngx-filter-pipe';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Especialidad} from '../../../models/especialidad.model';
import { EspecialidadService } from '../../../Services/especialidad/especialidad.service';
import { switchMap } from 'rxjs/operators';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-especialidad',
  templateUrl: './especialidad.component.html',
  styleUrls: ['./especialidad.component.css'],
  providers: [DatePipe]
})
export class EspecialidadComponent implements OnInit {
  id:string;
  descripcion = [ {
    des:'Dermatología',
    },{
    des:'Oftalmología',
    },{
    des:'Pediatría',
    },{
    des:'Medicina General',
    },
    {
    des:'Cardiología',
    },{
    des:'Gastroenterología',
    }
  ]

estado=[{
      est:'No Disponible',
  },{
      est:'Disponible'
  }]
  public especialidad:  Especialidad = new Especialidad();

  registroEspecialidad: Especialidad[]=[];
   filtro = "";
   especialidades: Especialidad[]=[];
   @ViewChild('modalEspecialidad') modalEspecialidadR: ElementRef;
   @ViewChild('modalEspecialidadAct') modalEspecialidadAct: ElementRef;
   
   idEspecialidad: Date;
   formEspecialidadR: FormGroup;
   formEspecialidadAct: FormGroup;
   especialidadSeleccionado: Especialidad;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private router: Router,
    private pipe:FilterPipe,
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private EspecialidadService: EspecialidadService,

  ) { }

  async ngOnInit(): Promise<void> {

  var dataEspecialidades = await this.EspecialidadService.listar().toPromise();
  this.especialidades=dataEspecialidades.data

  this.formEspecialidadR=this.fb.group({
    descripcion: ['', [Validators.required]],
    doctor: ['', [Validators.required]],
    estado: ['Disponible', [Validators.required]],
    fechaHora:  ['', [Validators.required]],
    fechaFin:  ['', [Validators.required]],
  })

  this.formEspecialidadAct = this.fb.group({
    descripcion: ['', [Validators.required]],
    doctor: ['', [Validators.required]],
    estado: ['', [Validators.required]],
    fechaHora:  ['', [Validators.required]],
    fechaFin:  ['', [Validators.required]],
  })
}

abrilModal(){
  this.modalEspecialidadR.nativeElement.click();
}

abrirModalAct(row: Especialidad){
  this.modalEspecialidadAct.nativeElement.click();
  this.especialidadSeleccionado=row;
  this.formEspecialidadAct.controls.descripcion.setValue(row.descripcion);
  this.formEspecialidadAct.controls.doctor.setValue(row.doctor);
  this.formEspecialidadAct.controls.estado.setValue(row.estado);
  let fechaDate = new Date(row.fechaHora)
  let FechaDate = new Date(row.fechaFin)

}

Tfecha(fecha: Date){
  return `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}`;
}

async registrar() {
  /*if(this.formEspecialidadR.invalid){
    Swal.fire('Advertencia', 'Revise los campos.', 'warning')
    return;
  }*/

  let datos = this.formEspecialidadR.value;
  let fecha = new Date(datos.fechaHora)
  let fechaa = new Date(datos.fechaFin)
  let fechaActual = new Date()

  if ( fechaActual > fecha){
    Swal.fire('Advertencia', 'No puede ser menor al dia actual', 'warning')
    return;
  }

  if ( fechaActual > fechaa){
    Swal.fire('Advertencia', 'No puede ser menor al dia actual', 'warning')
    return;
  }

  if ( fecha > fechaa){
    Swal.fire('Advertencia','la fecha inicio no puede ser mayor que la fecha fin ', 'warning')
    return;
  }
 
  let query = {
      descripcion: datos.descripcion,
      doctor: datos.doctor,
      estado: datos.estado,
      fechaHora: new Date(datos.fechaHora),
      fechaFin: new Date(datos.fechaFin)
  }
  try{
    let response  = await this.EspecialidadService.registrar(query).toPromise();
    this.formEspecialidadR.reset();
    Swal.fire('Correcto',' Se registró correctamente ', 'success')
    this.formEspecialidadR.reset();
    var dataEspecialidad = await this.EspecialidadService.listar().toPromise();
    this.especialidades = dataEspecialidad.data;
  } catch (err){
    console.log(err);
  }

}

async actualizar(){
  if(this.formEspecialidadAct.invalid){
    Swal.fire('Advertencia',' Verifica los campos', 'warning')
    return; 
  }

  let datos = this.formEspecialidadAct.value;
  let query = {
    fechaHora: new Date(datos.fechaHora),
    fechaFin: new Date(datos.fechaFin),
    doctor: datos.doctor,
    descripcion: datos.descripcion,
    estado: datos.estado,
  }
   try {
    let response = await this.EspecialidadService.actualizar(this.especialidadSeleccionado._id, query).toPromise();
    Swal.fire('Corecto','Actualizacion Exitosa', 'success')

    var dataESpecialidad = await this.EspecialidadService.listar().toPromise();
    this.especialidades = dataESpecialidad.data;
  } catch(err){
    console.log(err);
  }
}

eliminarEspecialidad( _id: string ){
  Swal.fire({
   text: '¿Está seguro que desea elimnar la especialidad?',
   icon: 'warning',
   showCancelButton: true,
   cancelButtonText: 'Cancelar',
   confirmButtonColor:'Aceptar'
  }).then((willDelete)=>{
    if(willDelete.isConfirmed){
      this.EspecialidadService.eliminar(_id).pipe(switchMap(()=>{
        return this.EspecialidadService.listar();
      }))
      .subscribe(data =>{
        this.registroEspecialidad=data.data;
        Swal.fire('Exitoso!',
        'Se eliminó exitosamente',
        'success');
     
      });
    } else{
      Swal.fire(
        'El registro no se eliminó'
      )
    }
  })
  this.router.navigate(['/citas/gestionar-especialidad']);
};


} 
  
  

