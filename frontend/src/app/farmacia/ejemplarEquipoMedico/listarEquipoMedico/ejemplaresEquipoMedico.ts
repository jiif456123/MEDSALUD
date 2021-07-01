import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EjemplarEquipoMedicoService } from 'Services/ejemplarEquipoMedico.service';
import { ActivatedRoute } from '@angular/router';
import { EjemplarEquipoMedico } from '../../../../models/ejemplarEquipoMedico.model';
import { FormGroup,Validators, FormBuilder } from '@angular/forms';
import { EquiposMedicosService } from 'Services/equiposMedicos.service';
import { EquiposMedicos } from '../../../../models/equiposMedicos.model';
import { formatDate} from '@angular/common';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-listarEquipoMedico',
  templateUrl: './ejemplaresEquipoMedico.html',
  styleUrls: [ './ejemplaresEquipoMedico.css'],
  providers: [EjemplarEquipoMedicoService]
})

export class 
EjemplaEquipoMedicoComponent implements OnInit {
  @ViewChild('modalActualizar') modalActualizar: ElementRef;
  formEquipoMedico: FormGroup;
  id:string;
  formEjemplarActualizar: FormGroup;  
  ejemplarSeleccionado: EjemplarEquipoMedico;
  equipoMedico: EquiposMedicos;
  constructor(
    private datePipe: DatePipe,
    public ejemplarEquipoMedicoService: EjemplarEquipoMedicoService, 
    public equiposMedicosService: EquiposMedicosService,
    private route:ActivatedRoute,
    private fb: FormBuilder,   
  ) { }

   ngOnInit(): void {
    this.equipoMedico = new EquiposMedicos();
    this.id = this.route.snapshot.params['id'];
    this.getEjemplarEquipoMedico();  
    this.formEjemplarActualizar = this.fb.group({
      idEquipo: ['', [Validators.required]],
      ubicacion: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      solicitante: ['', [Validators.required]],
      fechaEntrega: ['', [Validators.required]],
      fechaDevolucion: ['', [Validators.required]]
    });    
  }

  getEjemplarEquipoMedico() { 
    this.ejemplarEquipoMedicoService.getEjemplarEquipoMedicoId(this.id).subscribe(
      res =>{
        this.ejemplarEquipoMedicoService.ejemplarEquipoMedico= res;
        console.log(res);
      },
      err => console.error(err)
    )
  } 
  getEquipoMedico(id)
  {
    this.equiposMedicosService.listarEquipoMedicoId(id).subscribe(data => {
      this.equipoMedico = data;
      console.log(this.equipoMedico);
    });
  }
  openModal(row: EjemplarEquipoMedico){
    this.modalActualizar.nativeElement.click();
    this.ejemplarSeleccionado = row;    
    this.formEjemplarActualizar.controls.idEquipo.setValue(row._id);
    this.formEjemplarActualizar.controls.ubicacion.setValue(row.ubicacion); 
    this.formEjemplarActualizar.controls.estado.setValue(row.estado);
    this.formEjemplarActualizar.controls.solicitante.setValue(row.solicitante);
    this.formEjemplarActualizar.controls.fechaEntrega.setValue(this.datePipe.transform(row.fechaEntrega,"yyyy-MM-dd")); 
    this.formEjemplarActualizar.controls.fechaDevolucion.setValue(this.datePipe.transform(row.fechaDevolucion,"yyyy-MM-dd"));   
    this.getEquipoMedico(this.id);          
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
    this.ejemplarEquipoMedicoService.updateEjemplarEquipoMedico(this.ejemplarSeleccionado._id,query)
      .subscribe( data => {
        console.log(data);     
      },error => console.error(error)); 
      this.updateEquipoMedico(); 
      this.updateCantidad();
  }
  updateEquipoMedico()
  {      
    if(this.formEjemplarActualizar.valid){
      this.updateCantidad();
      let query = {
          disponible: this.equipoMedico.disponible,
          noDisponible: this.equipoMedico.noDisponible
      }
      this.equiposMedicosService.updateEquipoMedico(this.id,query)
      .subscribe(data => {
        console.log(data);
        return this.equiposMedicosService.getEquiposMedicos();         
      }, error => console.log(error));
    }  

  }  
  updateCantidad(){
    let est = this.formEjemplarActualizar.controls.estado.value;
    if(est == 'Disponible'){
      this.equipoMedico.disponible+= 1;  
      this.equipoMedico.noDisponible-=1; 
    }else if(est == 'Ocupado'){
      this.equipoMedico.noDisponible+= 1; 
      this.equipoMedico.disponible-= 1;    
    }
    console.log(est);
  }
  get ubicacion(){return this.formEjemplarActualizar.get('ubicacion');}
  get solicitante(){return this.formEjemplarActualizar.get('solicitante');}

}

