import { Component, OnInit } from '@angular/core';
import { AlertaService } from 'Services/alerta.service';
@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.scss', '../farmacia.css'],
  providers: [AlertaService]
})
export class AlertasComponent implements OnInit {
  public pageSize = 7;
  public page;
  constructor(public alertaService:AlertaService) { }
  alertas = [];
  ngOnInit(): void {
    this.getAlerta();
  }
    getAlerta(){
      this.alertaService.getAlerta().subscribe(
        response =>{
          this.alertas = response.data;
          this.page=1;
        }
      )}
}
