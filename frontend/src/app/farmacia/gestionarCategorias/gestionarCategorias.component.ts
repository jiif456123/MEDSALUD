import { Component, OnInit } from '@angular/core';
import { GestionarCategoriaService } from 'Services/gestionarCategoria.service';
import { NgForm, FormGroup,FormControl, Validators } from '@angular/forms'; //para add
import {Categoria} from '../../../models/gestionarCategoria.model';
import { element } from 'protractor';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-categoriaM',
  templateUrl: './gestionarCategorias.component.html',
  styleUrls: [ './gestionarCategorias.component.css', '../farmacia.css'],
  providers: [GestionarCategoriaService]
})

export class GestionarCategoriaComponent implements OnInit {

public page;
public pageSize=7;
  //creamos instancia gestionarCategoriaService para usar los metodos que usamos en la clase GESTIONARCATEGORIASSERVICE
  constructor(public gestionarCategoriaService: GestionarCategoriaService) { }
  
  public isError = false;
  public isError2 = false;
  public isConfirmation = false;

  public rdBV = 0;
  public rdBR = 0;
  ngOnInit(): void{//  NEW 
    this.getCategorias();
  }
  onNombreChange(change){
    if(change==""){
      console.log("es requirido este campo!");
      return;
    }
  console.log(change);
  }

  getCategorias() { //vamos a llenar el arreglo del service
    /*
    Eso significa que se suscribirá al observable de interés (que es getTasks () en su caso) y 
    esperará hasta que tenga éxito y luego ejecutará la primera función de devolución de llamada pasada, que en su caso es:
    */
   
    this.gestionarCategoriaService.getCategorias().subscribe(
      res =>{
     
        this.gestionarCategoriaService.categorias= res;
        this.page=1;
      },
      err => console.error(err)
    )
  }


//xd
  addCategoriaM(form: NgForm){
    if(form.value._id){
    this.gestionarCategoriaService.putCategoria(form.value).subscribe(
      res  => console.log(res),
      err => console.error(err)
    );
    }else{
    
    this.gestionarCategoriaService.createCategoria(form.value).subscribe(
      (res)=> {
      this.getCategorias();
      },
      (err) => console.error(err)

    );
    }
    //console.log(form.value);
  }

  updateCategoriaM(form: NgForm){

    if(form.value._id){
    this.gestionarCategoriaService.putCategoria(form.value).subscribe(
      res  => console.log(res),
      err => console.error(err)
    );
    }
    //console.log(form.value);
  }
   
  getCategoria(categoria: Categoria ){
    this.gestionarCategoriaService.selectedCategoria2=categoria;
    const nombre23=categoria.nombre;
    console.log(nombre23);
    this.gestionarCategoriaService.selectedCategoria4.nombre=nombre23;

    //console.log(categoria);
  }

  resetForm(form:NgForm){
    form.reset();
  }


  //Buscar Por nombre de la categoria actualizando el arreglo categoria
  
  searchByNombre(form: NgForm){
    this.gestionarCategoriaService.getCategoriaByNombre(form.value.nombre).subscribe(
      res =>{
        this.gestionarCategoriaService.categorias= res;
        
      },
      err => console.error(err)
    )

  };

  searchByNombreA(form: NgForm){
    if(form.invalid){
      this.isError = true;
    }else{
    this.gestionarCategoriaService.getCategoriaByNombreA(form.value.nombre).subscribe(
      res =>{
        this.gestionarCategoriaService.categorias= res;
        /*
         console.log("TAMAÑO ALRREñ"+ res.length);
         console.log("ERROR 1 Este entra en Res: "+this.isError);
         console.log("ERROR 2 Este entra en Res: "+this.isError2);*/
         if(res.length>0){
            this.isError2 = true;
            /*
            console.log("Este dato ya existe");
            console.log("ERROR 2 Este entra en IF: "+this.isError2);*/
            
         }
         
         /////--------------------------
         /*if(this.gestionarCategoriaService.selectedCategoria2.nombre==form.value.nombre){
            this.isError2=false;
         }*/
         if(this.isError==false && this.isError2==false){

           this.isConfirmation=true;
           /*
           console.log("ERROR 1B Este entra en Res: "+this.isError);
         console.log("ERROR 2B Este entra en Res: "+this.isError2);*/
         //  this.addCategoriaM(form);
         let element: HTMLElement =document.getElementById('agregarBoton') as HTMLElement;
         
         element.click();  
          console.log("Añadido");
         }
         
         
      },
      err => console.error(err)
    )
  }
      
  };

 
  searchByNombreU(form: NgForm){
    if(form.invalid){
      this.isError = true;
    }else{
    this.gestionarCategoriaService.getCategoriaByNombreA(form.value.nombre).subscribe(
      res =>{
        this.gestionarCategoriaService.categorias= res;
        /*
         console.log("TAMAÑO ALRREñ"+ res.length);
         console.log("ERROR 1 Este entra en Res: "+this.isError);
         console.log("ERROR 2 Este entra en Res: "+this.isError2);*/
         if(res.length>0){
            this.isError2 = true;
            /*
            console.log("Este dato ya existe");
            console.log("ERROR 2 Este entra en IF: "+this.isError2);*/
            
         }
         /////--------------------------
         console.log(this.isError2);
         if(form.value.nombreE==form.value.nombre){
              this.isError2=false;
         }


        
         
         if(this.isError==false && this.isError2==false){

           this.isConfirmation=true;
           /*
           console.log("ERROR 1B Este entra en Res: "+this.isError);
         console.log("ERROR 2B Este entra en Res: "+this.isError2);*/
         //  this.addCategoriaM(form);
         let element: HTMLElement =document.getElementById('actualizarBoton') as HTMLElement;
         
         element.click();  
         this.getCategorias();
          console.log("Añadido");
         }
         
         
      },
      err => console.error(err)
    )
  }
      
  };
  
  
  onCloseAlert() {
    this.isError = false;
    this.isError2 = false;
  }

    //Validaciones
    onSave(form: NgForm): void {
  
      if (form.invalid ) {
        this.isError = true;
      } else {

          this.addCategoriaM(form);
        }
    }
//BOTON ROJO
    radioButton(){
       if(this.rdBR==0){
         this.rdBR=0;
         this.rdBV=0;
       // this.rdBV=0;
      //  this.rdBR=1;
       }
    //  this.rdBR=1;
    ///  this.rdBV=1;
      console.log(this.rdBV);
          console.log(this.gestionarCategoriaService.selectedCategoria4.estado);
          
      
      }
//BOTON VERDE
      radioButton2(){
       
        this.rdBR=0;
        this.rdBV=0;
          console.log(this.rdBR);
        console.log(this.gestionarCategoriaService.selectedCategoria4.estado);
        
    
    }
    onCloseAlert2() {
      this.rdBR = 0;
      this.rdBV = 1;
    }

    deleteCategoria(id: string){
      
      this.gestionarCategoriaService.deleteCategoriasM(id).subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
      
    }

    cambiarEstado(form:NgForm){
    if(this.gestionarCategoriaService.selectedCategoria2.estado==0){
        this.gestionarCategoriaService.selectedCategoria2.estado=1;
        
        console.log(this.gestionarCategoriaService.selectedCategoria2.estado);
    }
    }
    cambiarEstado2(form:NgForm){
      
      if(this.gestionarCategoriaService.selectedCategoria2.estado==1){
        this.gestionarCategoriaService.selectedCategoria2.estado=0;
        console.log(this.gestionarCategoriaService.selectedCategoria2.estado);
    }
      }

     

}
