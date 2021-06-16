import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EjemplarEquipoMedicoService } from 'Services/ejemplarEquipoMedico.service';
import { ActivatedRoute } from '@angular/router';
import { EjemplarEquipoMedico } from '../../../../models/ejemplarEquipoMedico.model';
import { FormGroup, FormControl,Validators, FormBuilder } from '@angular/forms';
import {DatePipe} from '@angular/common';
import { EquiposMedicosService } from 'Services/equiposMedicos.service';
import $ = require("jquery");


@Component({
  selector: 'app-listarEquipoMedico',
  templateUrl: './ejemplaresEquipoMedico.html',
  styleUrls: [ './ejemplaresEquipoMedico.css'],
  providers: [EjemplarEquipoMedicoService, DatePipe]
})


export class 
EjemplaEquipoMedicoComponent implements OnInit {
  @ViewChild('modalActualizar') modalActualizar: ElementRef;
  formEquipoMedico: FormGroup;
  id:string;
  disponible:number;
  noDisponible:number;
  formEjemplarActualizar: FormGroup;  
  ejemplares: EjemplarEquipoMedico[] = []
  ejemplarSeleccionado: EjemplarEquipoMedico;
  
  constructor(

    public ejemplarEquipoMedicoService: EjemplarEquipoMedicoService, 
    public equiposMedicosService: EquiposMedicosService,
    private route:ActivatedRoute,
    private fb: FormBuilder,
    private datePipe: DatePipe
  ) { }

   ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getEjemplarEquipoMedico(this.id);  
    
    this.formEjemplarActualizar = this.fb.group({
      idEquipo: ['', [Validators.required]],
      ubicacion: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      solicitante: ['', [Validators.required]],
      fechaEntrega: ['', [Validators.required]],
      fechaDevolucion: ['', [Validators.required]]
    });    
  }

  getEjemplarEquipoMedico(id) { 
    this.ejemplarEquipoMedicoService.getEjemplarEquipoMedicoId(id).subscribe(
      res =>{
        this.ejemplarEquipoMedicoService.ejemplarEquipoMedico= res;
      },
      err => console.error(err)
    )
  } 
  
  openModal(row: EjemplarEquipoMedico){
    this.modalActualizar.nativeElement.click();
    this.ejemplarSeleccionado = row;    
    this.formEjemplarActualizar.controls.idEquipo.setValue(row._id);
    this.formEjemplarActualizar.controls.ubicacion.setValue(row.ubicacion);
    this.formEjemplarActualizar.controls.estado.setValue(this.valueState());
    this.formEjemplarActualizar.controls.solicitante.setValue(row.solicitante);
    this.formEjemplarActualizar.controls.fechaEntrega.setValue(row.fechaEntrega);
    this.formEjemplarActualizar.controls.fechaDevolucion.setValue(row.fechaDevolucion);      
           
  }  
  update(){

    let datos = this.formEjemplarActualizar.value
    let query = {

      ubicacion: datos.ubicacion,
      estado: datos.estado,
      solicitante: datos.solicitante,
      fechaEntrega: datos.fechaEntrega,
      fechaDevolucion: datos.fechaDevolucion
    }  
    this.updateAmount();
    this.ejemplarEquipoMedicoService.updateEjemplarEquipoMedico(this.id,query).subscribe(
      res =>{
        this.ejemplarEquipoMedicoService.ejemplarEquipoMedico= res;
        return this.equiposMedicosService.getEquiposMedicos();
      },
      err => console.error(err)
    )     
  }
  updateEquipoMedico()
  {      
      let query = {
          disponible: this.disponible,
          noDispopnible: this.noDisponible
      }
      this.equiposMedicosService.updateEquipoMedico(this.ejemplarSeleccionado.idEquipoMedico._id,query)
      .subscribe(data => {
        console.log(data);
        return this.equiposMedicosService.getEquiposMedicos();         
      }, error => console.log(error));
  }  
  valueState(){        
    
    if( this.ejemplarSeleccionado.estado == 'Disponible') {
      $('input[name=rdbEstado][value=Disponible]').prop('checked',true);       
    }        
    else if( this.ejemplarSeleccionado.estado == 'No Disponible')
    {
      $('input[name=rdbEstado][value=NoDisponible]').prop('checked',true);
    }         
  }
  updateAmount(){
    if(document.forms["formEjemplar"]["rdbDisponible"].checked == true){
      this.disponible += this.ejemplarSeleccionado.idEquipoMedico.disponible; 
    }
    else if(document.forms["formEjemplar"]["rdbNoDisponible"].checked == true){
      this.noDisponible += this.ejemplarSeleccionado.idEquipoMedico.noDisponible;
    }
    
  }
}
