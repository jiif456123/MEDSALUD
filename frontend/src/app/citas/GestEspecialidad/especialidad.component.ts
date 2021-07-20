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

  @ViewChild('modalRegistrar') modalRegistrar: ElementRef;
  @ViewChild('modalActualizar') modalActualizar: ElementRef;
  formEspecialidad: FormGroup;
  formEspecialidadActualizar:FormGroup;

  filtro = "";

  especialidades: Especialidad[]=[];
  especialidadSeleccionado: Especialidad;

  id:string;

  

  public especialidad:  Especialidad = new Especialidad();
  registroEspecialidad: Especialidad[]=[];
   
  idEspecialidad: Date;
   
  
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private router: Router,
    private pipe:FilterPipe,
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private EspecialidadService: EspecialidadService,

  ) { }

  async ngOnInit(): Promise<void>{
    var data = await this.EspecialidadService.listar().toPromise();
    this.especialidades = data.data
    this.formEspecialidad = this.fb.group({

    descripcion: ['', [Validators.required]],
    doctor: ['', [Validators.required]],
    estado: ['Disponible', [Validators.required]],
    fechaHora: ['', [Validators.required]],
    fechaFin: ['', [Validators.required]],

    })

    this.formEspecialidadActualizar = this.fb.group({
    descripcion: ['', [Validators.required]],
    doctor: ['', [Validators.required]],
    estado: ['', [Validators.required]],
    fechaHora: ['', [Validators.required]],
    fechaFin: ['', [Validators.required]],
    })
  }

TfechaHora(fechaHora: Date){
  return `${fechaHora.getFullYear()}-${fechaHora.getMonth() + 1}-${fechaHora.getDate()}`;
}

TfechaFin(fechaFin: Date){
  return `${fechaFin.getFullYear()}-${fechaFin.getMonth() + 1}-${fechaFin.getDate()}`;
}

abrirModal(){
  this.modalRegistrar.nativeElement.click();
}

abrirModalActualizar(row:Especialidad){
  this.modalActualizar.nativeElement.click();
  this.especialidadSeleccionado=row;
  this.formEspecialidadActualizar.controls.descripcion.setValue(row.descripcion);
  this.formEspecialidadActualizar.controls.doctor.setValue(row.doctor);
  this.formEspecialidadActualizar.controls.estado.setValue(row.estado);
  this.formEspecialidadActualizar.controls.fechaHora.setValue(row.fechaHora);
  this.formEspecialidadActualizar.controls.fechaFin.setValue(row.fechaFin);
}

async registrar(){
if(this.formEspecialidad.invalid){
  this.formEspecialidad.markAllAsTouched();
 Swal.fire('Advertencia', 'Agregue un Doctor', 'warning')
  return;
}

let datos = this.formEspecialidad.value;

let fechaH = new Date(datos.fechaHora)
let fechaF = new Date(datos.fechaFin)
let fechaActual = new Date()

/*if ( fechaActual < fechaH){
  Swal.fire('Advertencia','1 No puede ser menor al dia actual ', 'warning')
  return;
}

if ( fechaActual > fechaF){
  Swal.fire('Advertencia', '2 No puede ser menor al dia actual', 'warning')
  return;
}*/

if ( fechaH == fechaF){
  Swal.fire('Advertencia','Fecha de inicio no puede ser igual a la final', 'warning')
  return;
}

if( fechaH > fechaF){
  Swal.fire('Advertencia','Fecha de inicio no puede ser menor a la final', 'warning')
  return;
}

let query={
  descripcion: datos.descripcion,
  doctor: datos.doctor,
  estado: datos.estado,
  fechaHora: new Date(datos.fechaHora),
      fechaFin: new Date(datos.fechaFin)
}
debugger;
try{
  let response = await this.EspecialidadService.registrar(query).toPromise();
  this.formEspecialidad.reset();
  Swal.fire('Correcto',' Se registró correctamente ', 'success')
  var dataEspecialidad = await this.EspecialidadService.listar().toPromise();
  this.especialidades = dataEspecialidad.data;
 
}catch(err){
  console.log(err);
}
}

async actualizar(){
  if(this.formEspecialidadActualizar.invalid){
    Swal.fire('Advertencia',' Verifica los campos', 'warning')
    return; 
  }

  let datos = this.formEspecialidadActualizar.value
  let query = {
    fechaHora: new Date(datos.fechaHora),
    fechaFin: new Date(datos.fechaFin),
    descripcion: datos.descripcion,
  doctor: datos.doctor,
  estado: datos.estado,
  }
   try {
    let response = await this.EspecialidadService.actualizar(this.especialidadSeleccionado._id,query).toPromise();
    this.formEspecialidad.reset();
    var dataEspecialidad = await this.EspecialidadService.listar().toPromise();
    this.especialidades = dataEspecialidad.data;
    Swal.fire('Corecto','Actualizacion Exitosa', 'success')
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
  
  

