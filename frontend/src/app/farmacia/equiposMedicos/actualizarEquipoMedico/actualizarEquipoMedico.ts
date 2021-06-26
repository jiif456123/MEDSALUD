import { Component, OnInit } from '@angular/core';
import { EquiposMedicos } from '../../../../models/equiposMedicos.model';
import { FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { EquiposMedicosService } from '../../../../Services/equiposMedicos.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-actualizarEquipoMedico',
  templateUrl: './actualizarEquipoMedico.html',
  styleUrls: ['./actualizarEquipoMedico.component.css']
})
export class ActualizarEMComponent implements OnInit{
  id: string;
  formEquipoMedicoActualizar: FormGroup   
  equipoMedico: EquiposMedicos;
  
  constructor(
    private equiposMedicosService: EquiposMedicosService,
    private route: ActivatedRoute,
    private activateRoute: ActivatedRoute,
  ){ }

  ngOnInit():void{  
    this.equipoMedico = new EquiposMedicos();     
    this.formEquipoMedicoActualizar = new FormGroup({
        'nombre': new FormControl('', Validators.required),
        'fabricante': new FormControl('', Validators.required),
        'especialidad': new FormControl('', Validators.required),
        'caracteristicas': new FormControl('', Validators.required),
        'cantidad': new FormControl(0, Validators.required)
    });
    this.activateRoute.params.subscribe((params: Params) => {
      this.id = this.route.snapshot.params['id'];
      this.loadForm();
    })  
  }
  loadForm() {
    
      this.equiposMedicosService.listarEquipoMedicoId(this.id).subscribe(data => {
        this.equipoMedico = data;
        console.log(this.equipoMedico)
        this.formEquipoMedicoActualizar = new FormGroup({
          //'id': new FormControl(this.equipoMedico._id, Validators.required),
          'nombre': new FormControl(this.equipoMedico.nombre, Validators.required),
          'fabricante': new FormControl(this.equipoMedico.fabricante, Validators.required),
          'especialidad': new FormControl(this.equipoMedico.especialidad, Validators.required),
          'caracteristicas': new FormControl(this.equipoMedico.caracteristicas, Validators.required),
          'cantidad': new FormControl(this.equipoMedico.cantidad, Validators.required),
          'disponible': new FormControl(0, Validators.required),
          'noDisponible': new FormControl(0, Validators.required)
        });
      });
    
  }
  update(){

    let datos = this.formEquipoMedicoActualizar.value
    let query = {
      nombre: datos.nombre,
      fabricante: datos.fabricante,
      especialidad: datos.especialidad,
      caracteristicas: datos.caracteristicas,
      cantidad: datos.cantidad,
      disponible: datos.cantidad,
      noDisponible: datos.noDisponible,

    }  
      this.equiposMedicosService.updateEquipoMedico(this.id,query)
        .subscribe(data => {
          console.log(data);
          return this.equiposMedicosService.getEquiposMedicos();         
        }, error => console.log(error));
    }       
  onSubmit(){
    this.update;
  }  

}
