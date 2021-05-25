import { Component, OnInit } from '@angular/core';
import { GestionarCategoriaService } from 'Services/gestionarCategoria.service';
import { NgForm } from "@angular/forms"; //para add

@Component({
  selector: 'app-categoriaM',
  templateUrl: './gestionarCategorias.component.html',
  styleUrls: [ './gestionarCategorias.component.css'],
  providers: [GestionarCategoriaService]
})

export class GestionarCategoriaComponent implements OnInit {
  //creamos instancia gestionarCategoriaService para usar los metodos que usamos en la clase GESTIONARCATEGORIASSERVICE
  constructor(public gestionarCategoriaService: GestionarCategoriaService) { }
  
  ngOnInit(): void{//  NEW 
    this.getCategoriaM();

  }

  getCategoriaM() { //vamos a llenar el arreglo del service
    /*
    Eso significa que se suscribirá al observable de interés (que es getTasks () en su caso) y 
    esperará hasta que tenga éxito y luego ejecutará la primera función de devolución de llamada pasada, que en su caso es:
    */
    this.gestionarCategoriaService.getCategoriasM().subscribe(
      res =>{
        this.gestionarCategoriaService.categorias= res;
      },
      err => console.error(err)
    )
  }

  addCategoriaM(form: NgForm){
    this.gestionarCategoriaService.createCategoriaM(form.value).subscribe(
      (res)=> {
      this.getCategoriaM();
      },
      (err) => console.error(err)

    );
    //console.log(form.value);
  }
 
}
