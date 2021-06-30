import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { movimientoMService } from 'Services/movimientoM.service';
import { EjemplarEquipoMedicoService } from 'Services/ejemplarEquipoMedico.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css' ,'../farmacia.css'],
  providers: [movimientoMService,EjemplarEquipoMedicoService]
})
export class MovimientosComponent implements OnInit {
  public pageSize = 6;
  public page; 
  public range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  public range1 = new FormGroup({
    start1: new FormControl(),
    end1: new FormControl()
  });
  public range2 = new FormGroup({
    start2: new FormControl(),
    end2: new FormControl()
  });

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

      Filtro(Modo,Tipo,fechaInicial,fechaFinal){
        
        fechaInicial = JSON.parse(JSON.stringify(fechaInicial));
        fechaFinal = JSON.parse(JSON.stringify(fechaFinal));
        if(Modo=='tipo' && fechaInicial=='null' && fechaFinal=='null'){
          if(Tipo!=''){
            this.movimientoMService.getfiltrar(Modo,Tipo,fechaInicial,fechaFinal).subscribe(
              res =>{
                this.medicamentos = res;
                console.log(res);
              },
              err => console.error(err)
            )
          }
          else{
            this.getMovimientoM();
          }
          }else if(Modo=='fecha'&& fechaInicial!=null && fechaFinal!=null)
            {
              console.log(fechaInicial);
              console.log(fechaFinal);
              this.movimientoMService.getfiltrar(Modo,Tipo,fechaInicial.toString(),fechaFinal.toString()).subscribe(
                res =>{
                  this.medicamentos = res;
                  console.log(res);
                },
                err => console.error(err)
              )
            }else{
              this.getMovimientoM();
            }
    }

    FiltroE(Modo,Tipo,fechaInicial,fechaFinal){
        
      fechaInicial = JSON.parse(JSON.stringify(fechaInicial));
      fechaFinal = JSON.parse(JSON.stringify(fechaFinal));
      if(Modo=='tipo' && fechaInicial=='null' && fechaFinal=='null'){
        if(Tipo!=''){
          this.ejemplarEquipoMedicoService.getfiltrar(Modo,Tipo,fechaInicial,fechaFinal).subscribe(
            res =>{
              this.equiposM = res;
              console.log(res);
            },
            err => console.error(err)
          )
        }
        else{
          this.getMovimientoE();
        }
        }else if(Modo=='fechaE'&& fechaInicial!=null && fechaFinal!=null)
          {
            console.log(fechaInicial);
            console.log(fechaFinal);
            this.ejemplarEquipoMedicoService.getfiltrar(Modo,Tipo,fechaInicial.toString(),fechaFinal.toString()).subscribe(
              res =>{
                this.equiposM = res;
                console.log(res);
              },
              err => console.error(err)
            )
          }else if(Modo=='fechaD'&& fechaInicial!=null && fechaFinal!=null)
          {
            console.log(fechaInicial);
            console.log(fechaFinal);
            this.ejemplarEquipoMedicoService.getfiltrar(Modo,Tipo,fechaInicial.toString(),fechaFinal.toString()).subscribe(
              res =>{
                this.equiposM = res;
                console.log(res);
              },
              err => console.error(err)
            )
          }
          else{
            this.getMovimientoE();
          }
  }   
           
  excelMedicamentos(){
     /* table id is passed over here */   
     let element = document.getElementById('excel-table'); 
     const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
    
     /* generate workbook and add the worksheet */
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Medicamentos');

     /* save to file */
     XLSX.writeFile(wb, 'MedSalud_Farmacia_Movimientos_Medicamentos.xlsx');
  };
  excelEquipos(){
    /* table id is passed over here */   
    let element = document.getElementById('excel-table1'); 
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
   
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Equipos Medicos');

    /* save to file */
    XLSX.writeFile(wb,'MedSalud_Farmacia_Movimientos_Equipos.xlsx');
 };
}
