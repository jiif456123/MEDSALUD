import { Component, OnInit, ViewChild } from '@angular/core';
import { MedicamentoService } from 'Services/medicamento.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from "@angular/forms"; //para add
import { Medicamento} from 'models/medicamento.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import swal from 'sweetalert2';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-medicamento',
  templateUrl: './inventario.component.html',
  styleUrls: [ './inventario.component.css', '../farmacia.css'],
  providers: [MedicamentoService]
})

export class inventarioComponent implements OnInit{
  @ViewChild('content') modal;
  
  idUser: string;
  lmedicamento: Medicamento[];
  formReserva: FormGroup;
  public pageSize = 7;
  public page;
  Fecha;
  fechaHoy = new Date()
  presentacionlist:string[]=["Tabletas","Inyectables","Jarabes", "Elixir", "Gotas", "Capsulas", "Pastillas", "Cajas", "Tubos"];
  ubicacionlist:string[]=["Pabellon A","Pabellon B","Pabellon C", "Pabellon D", "Pabellon E", "Pabellon F"];
  marcalist:string[]=["FarmaIndustria","johnson & johnson","Pfizer"];
  categorialist:string[]=["Oral","Inyectables","Liquidos"];
  unidadlist: string[] = ['mg', 'ml'];
  selectDispo='';

  constructor(public medicamentoService: MedicamentoService,
    private modalService: NgbModal,
    private fb: FormBuilder) { }
  medicamentos = [];
  
 ngOnInit(): void {
    this.getMedicamento();
    
    this.medicamentoService.listar().subscribe(data => {
      this.medicamentos = data.data;
    })
    this.formReserva = this.fb.group({
      Nombre: [''],
      Clx: [''],
    })
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
        
        this.medicamentoService.selectedMedicamento1 = medicamento;
  }
      
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
  




  abrirModal() {
    this.modalService.open(this.modal);
  }

  controlfecha(Fecha:Date){
    this.medicamentoService.listar().subscribe(data=>{
      data.data.map(a => {
        let fechas = a.Medicamento.Fecha;
        if( fechas === Fecha){
          Swal.fire('Error', 'No se puede tener una fecha igual', 'warning');
          return;
        } else if(this.Fecha ==null){
          Swal.fire('Error', 'Escoja fecha de inicio', 'warning')
          return;
        } else if(this.Fecha < this.fechaHoy){
          Swal.fire('Error', 'La fecha seleccionada no puede ser menor a la fecha de Hoy', 'warning')
          return;
        } 

        var vdatos = this.formReserva.value;

        var query = {
          Fecha: this.Fecha,
          nombre: vdatos.Nombre,
          clx: vdatos.Clx,
        }

        this.medicamentoService.insertar(query).subscribe(data => {
          Swal.fire('Datos correctamente')
          this.medicamentoService.listar().subscribe(data => {
            this.medicamentos = data.data;
          })
        })

      })
    })
  } 

}
