import { Component, OnInit } from '@angular/core';
import { RecetaMedica } from '../models/receta-medica.model';
import { RectaMedicaService } from '../services/recta-medica.service';

@Component({
  selector: 'app-consultar-receta-medica',
  templateUrl: './consultar-receta-medica.component.html',
  styleUrls: ['./consultar-receta-medica.component.css']
})
export class ConsultarRecetaMedicaComponent implements OnInit {

  filtro = "";
  recetas: RecetaMedica[] = [];
  constructor(
    private recMedicaService: RectaMedicaService
  ) { }

  async ngOnInit(): Promise<void> {
    var dataCita = await this.recMedicaService.listar().toPromise();
    this.recetas = dataCita.data;
  }

}
