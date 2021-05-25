import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PacienteService } from '../services/paciente.service';

@Component({
  selector: 'app-gestionar-paciente',
  templateUrl: './gestionar-paciente.component.html',
  styleUrls: ['./gestionar-paciente.component.css']
})
export class GestionarPacienteComponent implements OnInit {
  @ViewChild('modalRegistrar') modalRegistrar: ElementRef;

  pacientes = []
  constructor(
    private pacienteService: PacienteService
  ) { }

  async ngOnInit(): Promise<void> {
    var data= await this.pacienteService.listar().toPromise();
    this.pacientes = data.data
  }

  abrirModal(){
    this.modalRegistrar.nativeElement.click();
    console.log(this.modalRegistrar.nativeElement)
  }
}
