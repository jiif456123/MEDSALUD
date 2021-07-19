import { Component, OnInit } from '@angular/core';
import { AlertaService } from 'Services/alerta.service';
@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css'],
  providers: [AlertaService]
})
export class AlertasComponent implements OnInit {
  public pageSize = 7;
  public page;
  constructor(public alertaService:AlertaService) { }
  notificaciones = [];
  ngOnInit(): void {
  }
  getMedicamento(){
    this.alertaService.selectedAlerta.mensaje
    this.alertaService.getAlerta().subscribe(
      response =>{
        this.notificaciones = response.data;
        this.page=1;
      }
    )}

}
