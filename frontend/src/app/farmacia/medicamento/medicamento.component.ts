import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MedicamentoService } from 'Services/medicamento.service';
import { NgForm } from "@angular/forms"; //para add
import { Medicamento} from 'models/medicamento.model';

@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento.component.html',
  styleUrls: [ './medicamento.component.css'],
  providers: [MedicamentoService]
})

export class medicamentoComponent implements OnInit {

  public pageSize = 7;
  public page;

  presentacionlist:string[]=["Tabletas","Inyectables","Jarabes", "Elixir", "Gotas", "Capsulas"];
  ubicacionlist:string[]=["Pabellon A","Pabellon B","Pabellon C", "Pabellon D", "Pabellon E", "Pabellon F"];
  marcalist:string[]=["FarmaIndustria","johnson & johnson","Pfizer"];
  categorialist:string[]=["Oral","Inyectables","Liquidos"];
  unidadlist: string[] = ['mg', 'ml'];
  selectDispo='';

  constructor(public medicamentoService: MedicamentoService) { }
  medicamentos = []

 ngOnInit(): void {
    this.getMedicamento();
  }

  getMedicamento(){
    this.medicamentoService.getMedicamento().subscribe(
      response =>{
        this.medicamentos = response.data;
        this.page=1;
      }
    )}

  radioChangeHandler(event: any){
    this.selectDispo = event.target.value;
  }

  addMedicamento(form: NgForm){
    this.medicamentoService.createMedicamento(form.value).subscribe(
      
      (res)=> {
        this.getMedicamento();
      },
      (err) => console.error(err)
      
      );}
      getMedicamento1(medicamento:Medicamento) {
        console.log(medicamento._id);
        console.log(this.medicamentoService.selectedMedicamento1);
        this.medicamentoService.selectedMedicamento1 = medicamento;
      }
      
      updateMedicamento(form:NgForm){
        this.medicamentoService.updateMedicamento(form.value).subscribe(
          res =>{
              this.getMedicamento();
          },
          err => console.error(err)
        )
        }
}
