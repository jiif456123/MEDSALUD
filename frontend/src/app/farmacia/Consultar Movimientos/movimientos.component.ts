import { Component, OnInit } from '@angular/core';
import { movimientoMService } from 'Services/movimientoM.service';
import { EjemplarEquipoMedicoService } from 'Services/ejemplarEquipoMedico.service';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css' ,'../farmacia.css'],
  providers: [movimientoMService,EjemplarEquipoMedicoService]
})
export class MovimientosComponent implements OnInit {
  public pageSize = 7;
  public page;

  constructor(private movimientoMService: movimientoMService, public ejemplarEquipoMedicoService : EjemplarEquipoMedicoService) { }
  medicamentos = [];
  equiposM = [];
  ngOnInit(): void {
    this.getMovimientoM();
    this.getMovimientoE();
  }

  getMovimientoM(){
    this.movimientoMService.getMovimientoM().subscribe(
      response =>{
        this.medicamentos = response.data;
        
        console.log(this.medicamentos);
        this.page=1;
      }
    )}

    getMovimientoE(){
      this.ejemplarEquipoMedicoService.getMovimientoE().subscribe(
        res =>{
          this.equiposM = res;
          console.log(res);
        },
        err => console.error(err)
      )}
}
