import { Component, OnInit } from '@angular/core';
import { EquiposMedicos } from '../../../../models/equiposMedicos.model';
import { FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { EquiposMedicosService } from '../../../../Services/equiposMedicos.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-registrarEquipoMedico',
  templateUrl: './registrarEquipoMedico.html',
  styleUrls: ['./registrarEquipoMedico.css']
})
//Nombre creado
export class RegistrarMedicoComponent implements OnInit {
  id: string;
  editar: boolean;
  equipoMedico: EquiposMedicos;
  equipoMedicoActualizar: EquiposMedicos;
  formEquipoMedico: FormGroup;
  equiposMedicos: EquiposMedicos[];
  objequipoMedico: EquiposMedicos = null;

  constructor(
    private equiposMedicosService: EquiposMedicosService,
    private router: Router,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
  
    this.equiposMedicosService.getEquiposMedicos().subscribe(data =>{
        this.equiposMedicos=data.data;
    })
   
    this.formEquipoMedico = new FormGroup({  
      'nombre': new FormControl('', Validators.required),
      'fabricante': new FormControl('', Validators.required),
      'especialidad': new FormControl('', Validators.required),
      'caracteristicas': new FormControl('', Validators.required),
      'cantidad': new FormControl(0, Validators.required),
      'disponible': new FormControl(0, Validators.required),
      'noDisponible': new FormControl(0, Validators.required)
    });

    this.activateRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
    })
  }

  public invalid(field: any) {
    return this.formEquipoMedico.get(field).invalid && this.formEquipoMedico.get(field).touched;
  };

  registrar() {    
      this.formEquipoMedico.controls['disponible'].setValue(this.formEquipoMedico.controls["cantidad"].value);
      this.formEquipoMedico.controls['noDisponible'].setValue(0);
      this.equiposMedicosService.createEquipoMedico(this.formEquipoMedico.value).pipe(switchMap(() => {
        return this.equiposMedicosService.getEquiposMedicos();
      })).subscribe(data => {
        console.log(data)
        this.equiposMedicosService.EquipoMedicoCambio.next(data);
        this.equiposMedicosService.mensajeCambio.next('Equipo registrado correctamente');
      });
  }
  registrarEjemplares(){
    
  }

}
