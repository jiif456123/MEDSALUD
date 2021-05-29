import { Component, OnInit } from '@angular/core';
import { MedicamentoService } from 'Services/medicamento.service';
import { NgForm } from "@angular/forms"; //para add


@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento.component.html',
  styleUrls: [ './medicamento.component.css'],
  providers: [MedicamentoService]
})

export class medicamentoComponent implements OnInit {
  //creamos instancia gestionarCategoriaService para usar los metodos que usamos en la clase GESTIONARCATEGORIASSERVICE
  presentacionlist:string[]=["Tabletas","Inyectables","Jarabes", "Elixir", "Gotas", "Capsulas"];
  ubicacionlist:string[]=["Pabellon A","Pabellon B","Pabellon C", "Pabellon D", "Pabellon E", "Pabellon F"];
  marcalist:string[]=["FarmaIndustria","johnson & johnson","Pfizer"];
  categorialist:string[]=["Oral","Inyectables","Liquidos"];
  unidadlist: string[] = ['mg', 'ml'];
  selectDispo='';
  constructor(public medicamentoService: MedicamentoService) { }

  ngOnInit(): void{//  NEW 
    this.getMedicamento();
  }
   getMedicamento() { //vamos a llenar el arreglo del service
    /*
    Eso significa que se suscribirá al observable de interés (que es getTasks () en su caso) y 
    esperará hasta que tenga éxito y luego ejecutará la primera función de devolución de llamada pasada, que en su caso es:
    */
    this.medicamentoService.getMedicamento().subscribe(
      res =>{
        this.medicamentoService.medicamento= res;
      },
      err => console.error(err)
    )
  }
  addMedicamento(form: NgForm){
    this.medicamentoService.createMedicamento(form.value).subscribe(
      (res)=> {
        this.getMedicamento();
      },
      (err) => console.error(err)
      
      );
  }
  radioChangeHandler(event: any){
    this.selectDispo = event.target.value;
  }
}
