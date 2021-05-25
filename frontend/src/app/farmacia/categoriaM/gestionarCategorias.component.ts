import { Component, OnInit } from '@angular/core';
import { GestionarCategoriaService } from 'Services/gestionarCategoria.service';
import { NgForm } from "@angular/forms"; //para add

/*
import {CategoriaM} from 'models/categoriaM.model';
import { Categoria } from '../../models/categoria.model';*/

@Component({
  selector: 'app-categoriaM',
  templateUrl: './gestionarCategorias.component.html',
  styleUrls: [ './gestionarCategorias.component.css'],
  providers: [GestionarCategoriaService]
})

export class GestionarCategoriaComponent implements OnInit {

  /*
  PRUEBA
  */
 /*
  categoriasM: CategoriaM[];  
  categoriaM: CategoriaM;
  nombre:string;
  descripcion:string;
  estado:number;
*/

  constructor(public gestionarCategoriaService: GestionarCategoriaService) { }
  
  ngOnInit(): void{//  NEW 
    this.getCategoriaM();

  }

  getCategoriaM() {
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
 


  /*
  deleteCategoriasM(_id: string, form: NgForm) {
    if (confirm("Are you sure you want to delete it?")) {
      this.categoriaMService.deleteCategoriasM(_id).subscribe((res) => {
        this.getCategoriaM();
        //this.resetForm(form);
      });
    }
  }*/
  /*
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.categoriaMService.selectedEmployee = new Employee();
    }*/
/*
  ngOnInit() {

    this.categoriaMService.getCategoriasM()
    .subscribe( categoriasM =>
    this.categoriasM = categoriasM);
  
  }
*/
}
