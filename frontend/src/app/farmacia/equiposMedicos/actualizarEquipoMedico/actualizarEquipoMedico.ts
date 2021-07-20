import { Component, OnInit } from '@angular/core';
import { EquiposMedicos } from '../../../../models/equiposMedicos.model';
import { FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { EquiposMedicosService } from '../../../../Services/equiposMedicos.service';
import { ActivatedRoute, Params } from '@angular/router';
import $ = require("jquery");
@Component({
  selector: 'app-actualizarEquipoMedico',
  templateUrl: './actualizarEquipoMedico.html',
  styleUrls: ['./actualizarEquipoMedico.component.css']
})
export class ActualizarEMComponent implements OnInit{
  id: string;
  formEquipoMedicoActualizar: FormGroup   
  equipoMedico: EquiposMedicos;
  especialidades : string[] = [] ;
  
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
        'cantidad': new FormControl(0, [Validators.required, Validators.min(1)])
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
        this.fillEspecialidad(this.equipoMedico.especialidad);
        this.formEquipoMedicoActualizar = new FormGroup({
          'nombre': new FormControl(this.equipoMedico.nombre, Validators.required),
          'fabricante': new FormControl(this.equipoMedico.fabricante, Validators.required),
          'caracteristicas': new FormControl(this.equipoMedico.caracteristicas, Validators.required),
          'especialidad': new FormControl(this.equipoMedico.especialidad, Validators.required),
          'cantidad': new FormControl(this.equipoMedico.cantidad, Validators.required)
        });
      });
  }
  update(){
    if(this.formEquipoMedicoActualizar.valid)
    {
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
    else {console.log("Not valid!");}
  }

  onSubmit(){
    this.update;
  }
  fillEspecialidad(e)
  {    
    var esp : string[] = ['Dermatologia','Medicina General','Oftalmologia','Gastroenterologia','Pediatria','Cardiologia'] ; 
    this.especialidades[0] = e;
    for(let i=0;i<6;i++){
      if(esp[i] != e){
        this.especialidades.push(esp[i]);
      }      
    }     
    console.log(this.especialidades);
  }

  get nombre(){return this.formEquipoMedicoActualizar.get('nombre')};
  get fabricante(){return this.formEquipoMedicoActualizar.get('fabricante')};
  get especialidad(){return this.formEquipoMedicoActualizar.get('especialidad')};
  get caracteristicas(){return this.formEquipoMedicoActualizar.get('caracteristicas')};
  get cantidad(){return this.formEquipoMedicoActualizar.get('cantidad')};
}
