import { Component, OnInit } from '@angular/core';
import { EquiposMedicos } from '../../../../models/equiposMedicos.model';
import { FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { EquiposMedicosService } from '../../../../Services/equiposMedicos.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { EjemplarEquipoMedico } from '../../../../models/ejemplarEquipoMedico.model';
import { EjemplarEquipoMedicoService } from 'Services/ejemplarEquipoMedico.service';
import { AlertaService } from 'Services/alerta.service';

@Component({
  selector: 'app-registrarEquipoMedico',
  templateUrl: './registrarEquipoMedico.html',
  styleUrls: ['./registrarEquipoMedico.css'],
  providers: [EjemplarEquipoMedicoService, AlertaService]
})

export class RegistrarMedicoComponent implements OnInit {
  id: string;
  equipoMedico: EquiposMedicos;
  equipoMedicoActualizar: EquiposMedicos;
  formEquipoMedico: FormGroup;
  equiposMedicos: EquiposMedicos[];

  constructor(
    private equiposMedicosService: EquiposMedicosService,
    public  ejemplarMedicoService: EjemplarEquipoMedicoService,
    public alertaService:AlertaService,
    private router: Router,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
  
    this.equiposMedicosService.getEquiposMedicos().subscribe(data =>{
        this.equiposMedicos=data.data;
    })
   
    this.formEquipoMedico = new FormGroup({  
      nombre: new FormControl('', Validators.required),
      fabricante: new FormControl('', Validators.required),
      especialidad: new FormControl('', Validators.required),
      caracteristicas: new FormControl('', Validators.required),
      cantidad: new FormControl(0,[Validators.required,Validators.min(1),Validators.max(10)]),
      disponible: new FormControl(0, Validators.required),
      noDisponible: new FormControl(0, Validators.required)
    });

    this.activateRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
    })
  }
  
  addAlerta(nombre: string){
    
    this.alertaService.selectedAlerta.titulo = "Nuevo equipo médico";
    this.alertaService.selectedAlerta.mensaje = nombre + " ha sido registrado";
    this.alertaService.createAlerta(this.alertaService.selectedAlerta).subscribe(
  );}
  create() {   
    if(this.formEquipoMedico.valid){
      this.formEquipoMedico.controls['disponible'].setValue(this.formEquipoMedico.controls["cantidad"].value);
      this.formEquipoMedico.controls['noDisponible'].setValue(0);
      this.equiposMedicosService.createEquipoMedico(this.formEquipoMedico.value).pipe(switchMap(() => {
        return this.equiposMedicosService.getEquiposMedicos();
      })).subscribe(data => {
        console.log(data)
        this.createEjemplares();
        this.equiposMedicosService.EquipoMedicoCambio.next(data);
        this.equiposMedicosService.mensajeCambio.next('Equipo registrado correctamente');
      });    
    }    
    else{
      console.log("Not valid!")
    }     
  }
  createEjemplares(){    
    let cant = parseInt(this.formEquipoMedico.controls["cantidad"].value); 
    for(let i = 0; i<cant; i++)
    {
      /*
        this.EjemplarMedicoService.createEjemplarEquipoMedico().subscribe(data => {
        console.log(data);
      });
      */
    }
  }
  getLastIdEquipoMedico(){

  }
  
  get nombre(){return this.formEquipoMedico.get('nombre')};
  get fabricante(){return this.formEquipoMedico.get('fabricante')};
  get especialidad(){return this.formEquipoMedico.get('especialidad')};
  get caracteristicas(){return this.formEquipoMedico.get('caracteristicas')};
  get cantidad(){return this.formEquipoMedico.get('cantidad')};

}
