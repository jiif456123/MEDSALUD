import { Component, OnInit } from '@angular/core';
import { EquiposMedicosService } from 'Services/equiposMedicos.service';
import { NgForm } from "@angular/forms"; //para add
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EquiposMedicos } from '../../../../models/equiposMedicos.model';
@Component({
  selector: 'app-equiposMedicos',
  templateUrl: './equiposMedicos.component.html',
  styleUrls: [ './equiposMedicos.component.css','../../farmacia.css'],
  providers: [EquiposMedicosService]
})

export class EquiposMedicosComponent implements OnInit {
  
  constructor(
    public equiposMedicosService: EquiposMedicosService, 
    private router: Router,
    private activateRoute: ActivatedRoute,) { }

  ngOnInit(): void{
    this.getEquiposMedicos();

  }

  getEquiposMedicos() { //vamos a llenar el arreglo del service
    /*
    Eso significa que se suscribirá al observable de interés (que es getTasks () en su caso) y 
    esperará hasta que tenga éxito y luego ejecutará la primera función de devolución de llamada pasada, que en su caso es:
    */
    this.equiposMedicosService.getEquiposMedicos().subscribe(
      res =>{
        this.equiposMedicosService.equiposMedicos= res;
      },
      err => console.error(err)
    )
  }  
  addEquipoMedico(form: NgForm){
    this.equiposMedicosService.createEquipoMedico(form.value).subscribe(
      (res)=>{
        this.getEquiposMedicos();
      },
      (err) => console.error(err)
    );
  } 
  updateEquipoMedico(equipomedico: EquiposMedicos)
  {
    this.equiposMedicosService.selectedEquipoMedicos = equipomedico;
    this.router.navigate(['farmacia/ActualizarEquipoMedico',equipomedico._id]);
  } 
}

