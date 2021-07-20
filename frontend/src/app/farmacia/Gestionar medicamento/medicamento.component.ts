import { Component, OnInit} from '@angular/core';
import { MedicamentoService } from 'Services/medicamento.service';
import { NgForm } from "@angular/forms"; //para add
import { Medicamento} from 'models/medicamento.model';
import { AlertaService } from 'Services/alerta.service';

@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento.component.html',
  styleUrls: [ './medicamento.component.css', '../farmacia.css'],
  providers: [MedicamentoService, AlertaService]
})

export class medicamentoComponent implements OnInit{

  public pageSize = 7;
  public page;

  presentacionlist:string[]=["Tabletas","Inyectables","Jarabes", "Elixir", "Gotas", "Capsulas", "Pastillas", "Cajas", "Tubos"];
  ubicacionlist:string[]=["Pabellon A","Pabellon B","Pabellon C", "Pabellon D", "Pabellon E", "Pabellon F"];
  marcalist:string[]=["FarmaIndustria","johnson & johnson","Pfizer"];
  categorialist:string[]=["Antialergicos","Oral","Liquidos","Inyectables","Analgesicos"];
  unidadlist: string[] = ['mg', 'ml'];
  selectDispo='';

  constructor(public medicamentoService: MedicamentoService,public alertaService:AlertaService) { }
  medicamentos = [];
  
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
    getMedicamento1(medicamento:Medicamento) {
        
      this.medicamentoService.selectedMedicamento1 = medicamento;
  }

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
  addAlerta(nombre: MedicamentoService){
    this.alertaService.selectedAlerta.titulo = "Nuevo medicamento";
    this.alertaService.selectedAlerta.mensaje = nombre + " ha sido registrado";
    this.alertaService.createAlerta(this.alertaService.selectedAlerta).subscribe(
  );}
      
  updateMedicamento(form:NgForm){
      this.medicamentoService.updateMedicamento(form.value).subscribe(
          res =>{
              this.getMedicamento();
          },
          err => console.error(err)
  )}
  resetForm(form:NgForm){
          form.reset();
  }
  
  searchByNombre(nombre :string){
            if (nombre != "") {
              this.medicamentoService.getByNombre(nombre).subscribe(
                res =>{
                  this.medicamentos= res;
                },
                err => {console.error(err)}
              )
            } else {
              this.getMedicamento();
            }
  };       
}
