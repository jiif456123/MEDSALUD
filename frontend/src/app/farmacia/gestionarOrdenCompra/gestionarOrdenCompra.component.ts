import { Component, OnInit } from '@angular/core';
import { GestionarOrdenCompraService } from 'Services/gestionarOrdenCompra.service';
import { NgForm, FormGroup,FormControl, Validators } from '@angular/forms'; //para add
import { OrdenCompra,OrdenCompra2 } from '../../../models/gestionarOrdenCompra.model';

import {Gestionarp} from '../../../models/gestionarp.model';

import { element } from 'protractor';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import {DatePipe} from '@angular/common';

import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'



@Component({
  selector: 'app-ordenCompra',
  templateUrl: './gestionarOrdenCompra.component.html',
  styleUrls: [ './gestionarOrdenCompra.component.css'],
  //Se agrego en providers GestionarOrdenCompraComponent por el error  The pipe ' ' could not be found angular2 custom pipe
  providers: [GestionarOrdenCompraService,DatePipe]
})


export class GestionarOrdenCompraComponent implements OnInit {
  

public page;
public pageSize=7;

public page2; //0para que nos seleccione la primera pagina
public pageSize2=2;
  //creamos instancia gestionarCategoriaService para usar los metodos que usamos en la clase GESTIONARCATEGORIASSERVICE
  myDate = new Date();
  test: string;
  constructor(public gestionarOrdenCompraService: GestionarOrdenCompraService, private datePipe: DatePipe) { 

    this.test = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

  }

  

public prueba=false;
public isError = false;
public isError2 = false;

public sumaTotal=0;

  ngOnInit(): void{//  NEW 
   /* if(this.gestionarOrdenCompraService.medicamentoOCs==null){
      this.gestionarOrdenCompraService.medicamentoOCs.length=1;
    }*/
    this.getCategorias();
    this.getProveedores();
    this.getMedicamentos();
    console.log("xd");
    
   //this.verificarArregloMedOC();
    //console.log(this.gestionarOrdenCompraService.medicamentoOCs);
   // console.log("xd"+this.gestionarOrdenCompraService.medicamentoOCs.length);
    this.gestionarOrdenCompraService.selectedOrdenCompra2.categoria="Categoria.";
    this.gestionarOrdenCompraService.selectedOrdenCompra2.medicamento="Medicamento.";
    this.gestionarOrdenCompraService.selectedOrdenCompra2.unidad="Unidad.";
    this.gestionarOrdenCompraService.selectedOrdenCompra2.formaPago="Forma Pago.";
    this.gestionarOrdenCompraService.selectedOrdenCompra2.laboratorio="Laboratorio.";
    this.gestionarOrdenCompraService.selectedOrdenCompra2.proveedor="Proveedor.";
    this.gestionarOrdenCompraService.selectedOrdenCompra2.fecha=this.test;

    this.gestionarOrdenCompraService.selectedOrdenCompra3A.laboratorio="Laboratorio.";
    this.gestionarOrdenCompraService.selectedOrdenCompra3A.categoria="Categoria.";
    this.gestionarOrdenCompraService.selectedOrdenCompra3A.medicamento="Medicamento.";
    this.gestionarOrdenCompraService.selectedOrdenCompra3A.unidad="Unidad.";


  }

  downloadPDF() {

   
    const doc = new jsPDF()
    autoTable(doc, { html: '#my-table2'})
    autoTable(doc, { html: '#my-table'})
    doc.save('ordenDeCompra.pdf')
    }


  onNombreChange(change){
    if(change==""){
      console.log("es requirido este campo!");
      return;
    }
  console.log(change);
  }

  //EXCEPCIONES SI EL FORMATO DEL FORM ES INVALIDO Y SI LA CANTIDAD SUPERA AL EL STOCK
  //TODO: CANTIDAD SUPERA AL STOCK
  formExcepciones(form: NgForm){
    if(form.invalid){
      this.isError = true;
    }else{

      this.multiplicarPriceAndCantidad();

         if(this.isError==false && this.isError2==false){

          let element: HTMLElement =document.getElementById('agregarDBoton') as HTMLElement;
         
         element.click(); 
          console.log("Añadido");
         }
         
         
      }
  
  }
    
  formExcepcionesA(form: NgForm){
    if(form.invalid){
      this.isError = true;      
      this.isError2 = true;

    }else{
      this.multiplicarPriceAndCantidadA();
    }
  }

  onCloseAlert() {
    this.isError = false;
    this.isError2 = false;
  }

  //Veficiar si el arreglo esta vacio
  verificarArregloMedOC(){
    if(this.gestionarOrdenCompraService.medicamentoOCs==undefined){
      console.log("Arreglo VACIO");
    }else{
      
      this.prueba==true;
    }
  }

  getCategorias() { //vamos a llenar el arreglo del service
    /*
    Eso significa que se suscribirá al observable de interés (que es getTasks () en su caso) y 
    esperará hasta que tenga éxito y luego ejecutará la primera función de devolución de llamada pasada, que en su caso es:
    */
   
    this.gestionarOrdenCompraService.getOrdenCompras().subscribe(
      res =>{
     
        this.gestionarOrdenCompraService.ordenCompras= res;
        this.page=1;
      },
      err => console.error(err)
    )
  }
  getProveedores() { //vamos a llenar el arreglo del service
 
    this.gestionarOrdenCompraService.getProveedores().subscribe(
      res =>{
        this.gestionarOrdenCompraService.proveedores= res;
      },
      err => console.error(err)
    )
  }
  getMedicamentos() { //vamos a llenar el arreglo del service
 
    this.gestionarOrdenCompraService.getMedicamentos().subscribe(
      res =>{
        this.gestionarOrdenCompraService.medicamentos= res;
      },
      err => console.error(err)
    )
  }
  getCategoria(ordenCompraA: OrdenCompra ){
    this.gestionarOrdenCompraService.selectedOrdenCompraA=ordenCompraA;
    
  this.getLabByProveedorA(this.gestionarOrdenCompraService.selectedOrdenCompraA.proveedor);
  this.getMedicamentosOCByCodigoA(this.gestionarOrdenCompraService.selectedOrdenCompraA.codigo);
  }

  getDetalles(){
    
  this.getLabByProveedorA(this.gestionarOrdenCompraService.selectedOrdenCompraDetail.proveedor);
  this.getMedicamentosOCByCodigoA(this.gestionarOrdenCompraService.selectedOrdenCompraDetail.codigo);
  }

  getMedicamentosByCategoria(form:NgForm) { //vamos a llenar el arreglo del service
 
    this.gestionarOrdenCompraService.getMedByCategoria(form.value.categoria).subscribe(
      res =>{
        this.gestionarOrdenCompraService.medicamentos2= res;
      },
      err => console.error(err)
    )
  }

  getMedPriceStockByNombre(form:NgForm) { //vamos a llenar el arreglo del service
 
    this.gestionarOrdenCompraService.getMedPriceAStockByNombre(form.value.medicamento).subscribe(
      res =>{
        this.gestionarOrdenCompraService.medicamentosPSs= res;
      // this.gestionarOrdenCompraService.selectedMedicamentoOC.precio = this.gestionarOrdenCompraService.medicamentosPSs[0].precioUnitario;
       this.gestionarOrdenCompraService.selectedMedicamentoPS.stockActual = this.gestionarOrdenCompraService.medicamentosPSs[0].stockActual;
    
       console.log(this.gestionarOrdenCompraService.medicamentosPSs[0].precioUnitario);
      },
      err => console.error(err)
    )
  }

  getMedPriceStockByNombreA(form:NgForm) { //vamos a llenar el arreglo del service
 
    this.gestionarOrdenCompraService.getMedPriceAStockByNombre(form.value.medicamento).subscribe(
      res =>{
        this.gestionarOrdenCompraService.medicamentosPSs= res;
      // this.gestionarOrdenCompraService.selectedMedicamentoOCA.precio = this.gestionarOrdenCompraService.medicamentosPSs[0].precioUnitario;
       this.gestionarOrdenCompraService.selectedMedicamentoPSA.stockActual = this.gestionarOrdenCompraService.medicamentosPSs[0].stockActual;
    
       console.log(this.gestionarOrdenCompraService.medicamentosPSs[0].precioUnitario);
      },
      err => console.error(err)
    )
  }
  
  multiplicarPriceAndCantidad(){

    this.gestionarOrdenCompraService.selectedMedicamentoOC.total=Math.round(this.gestionarOrdenCompraService.selectedMedicamentoOC.precio*this.gestionarOrdenCompraService.selectedMedicamentoOC.cantidad);
    
  }

  multiplicarPriceAndCantidadA(){

    this.gestionarOrdenCompraService.selectedMedicamentoOCA.total=Math.round(this.gestionarOrdenCompraService.selectedMedicamentoOCA.precio*this.gestionarOrdenCompraService.selectedMedicamentoOCA.cantidad);
    
  }

  

  //TODO: agregar un medicamento segun el codigo del proveedor


  tipoUnidadText(){
    this.gestionarOrdenCompraService.selectedMedicamentoOC.tipoUnidad=this.gestionarOrdenCompraService.selectedMedicamentoOC.tipo +" x "+this.gestionarOrdenCompraService.selectedOrdenCompra2.unidad;

  }
  tipoUnidadTextA(){
    this.gestionarOrdenCompraService.selectedMedicamentoOCA.tipoUnidad=this.gestionarOrdenCompraService.selectedMedicamentoOCA.tipo +" x "+this.gestionarOrdenCompraService.selectedOrdenCompra3A.unidad;

  }
  addMedicamentoOC(form: NgForm){
    
  if(this.isError==false && this.isError2==false){
    this.gestionarOrdenCompraService.createMedicamentoOC(form.value).subscribe(
      (res)=> {
      //this.getCategorias();
      //TODO: ACTUALIZE CON  getMedicamentosOCByCodigo

      let element: HTMLElement =document.getElementById('mostrarBoton') as HTMLElement;
        
         element.click();  
      },
      (err) => console.error(err)

    );
  }
  
    }

    addMedicamentoOCA(form: NgForm){
      if(this.isError==false && this.isError2==false){
        this.gestionarOrdenCompraService.createMedicamentoOC(form.value).subscribe(
          (res)=> {
          //this.getCategorias();
          //TODO: ACTUALIZE CON  getMedicamentosOCByCodigo
    
          let element: HTMLElement =document.getElementById('mostrarBotonA') as HTMLElement;
             
             element.click();  
          },
          (err) => console.error(err)
    
        );
      }
       
        }
    
  // Obtiene los medicamentos segun el codigo del proveedor 
  getMedicamentosOCByCodigo(form:NgForm) { 
  this.sumaTotal=0;
    this.gestionarOrdenCompraService.getMedicamentoOCByCodigo(form.value.codigo).subscribe(
      res =>{
        this.gestionarOrdenCompraService.medicamentoOCs= res;

       if(res.length!=undefined){
        this.prueba=true;
        this.page2=1;
          
        //console.log("GETMEDICAMENTOBYCODIGO"+res[0].total);
        this.gestionarOrdenCompraService.medicamentoOCs.map(x=>
          this.sumaTotal+=x.total
          )
        this.gestionarOrdenCompraService.selectedOrdenCompra2.totalD=this.sumaTotal;
        //this.gestionarOrdenCompraService.selectedOrdenCompraA.total=this.sumaTotal;

       }
          
         
          //Para que una vez mostrada la lista se selecione en indice dela lista
         // this.page2=1;
        
      },
      err => console.error(err)
    )
  }

  getMedicamentosOCByCodigoA(codigo: number ) { 
    this.sumaTotal=0;
      this.gestionarOrdenCompraService.getMedicamentoOCByCodigo(codigo).subscribe(
        res =>{
          this.gestionarOrdenCompraService.medicamentoOCs= res;
  
         if(res.length!=undefined){
          this.prueba=true;
          this.page2=1;
            
          //console.log("GETMEDICAMENTOBYCODIGO"+res[0].total);
          this.gestionarOrdenCompraService.medicamentoOCs.map(x=>
            this.sumaTotal+=x.total
            )
            this.gestionarOrdenCompraService.selectedOrdenCompraA.totalD=this.sumaTotal;
  
         }
            
           
            //Para que una vez mostrada la lista se selecione en indice dela lista
           // this.page2=1;
          
        },
        err => console.error(err)
      )
    }

    getMedicamentosOCByCodigoAS(form: NgForm ) { 
      this.sumaTotal=0;
        this.gestionarOrdenCompraService.getMedicamentoOCByCodigo(form.value.codigo).subscribe(
          res =>{
            this.gestionarOrdenCompraService.medicamentoOCs= res;
    
           if(res.length!=undefined){
            this.prueba=true;
            this.page2=1;
              
            //console.log("GETMEDICAMENTOBYCODIGO"+res[0].total);
            this.gestionarOrdenCompraService.medicamentoOCs.map(x=>
              this.sumaTotal+=x.total
              )
              this.gestionarOrdenCompraService.selectedOrdenCompraA.totalD=this.sumaTotal;
    
           }
              
             
              //Para que una vez mostrada la lista se selecione en indice dela lista
             // this.page2=1;
            
          },
          err => console.error(err)
        )
      }

      

  cleanArreglo() { //vamos a llenar el arreglo del service
 
      this.gestionarOrdenCompraService.medicamentos2.length=0;
      this.gestionarOrdenCompraService.selectedOrdenCompra2.medicamento="";
      this.gestionarOrdenCompraService.selectedOrdenCompra2.medicamento="Medicamento.";

  }

  cleanArregloP() { //vamos a llenar el arreglo del service
    this.gestionarOrdenCompraService.proveedorLabs.length=0;
    this.gestionarOrdenCompraService.selectedOrdenCompra2.laboratorio="";
    this.gestionarOrdenCompraService.selectedOrdenCompra2.laboratorio="Laboratorio.";
}
cleanArregloPA() { //vamos a llenar el arreglo del service
  this.gestionarOrdenCompraService.proveedorLabs.length=0;
  this.gestionarOrdenCompraService.selectedOrdenCompra3A.laboratorio="";
  this.gestionarOrdenCompraService.selectedOrdenCompra3A.laboratorio="Laboratorio.";
}

  cleanArregloA() { //vamos a llenar el arreglo del service
 
    this.gestionarOrdenCompraService.medicamentos2.length=0;
    this.gestionarOrdenCompraService.selectedOrdenCompra3A.medicamento="";
    this.gestionarOrdenCompraService.selectedOrdenCompra3A.medicamento="Medicamento.";

}
  getProveedor(proveedor: Gestionarp ){
    this.gestionarOrdenCompraService.selectedProveedor=proveedor;


  }
  getProveedorLab(lab: string ){
    this.gestionarOrdenCompraService.selectedProveedor3.laboratorio=lab;


  }

  getLabByProveedor(form:NgForm){
    this.gestionarOrdenCompraService.getLabByNombreP(form.value.proveedor).subscribe(
      res =>{
      //  this.gestionarOrdenCompraService.proveedores=res;
        console.log('LAB')
        this.gestionarOrdenCompraService.proveedorLabs= res;/*
        this.gestionarOrdenCompraService.selectedProveedor3.laboratorio = this.gestionarOrdenCompraService.proveedorLabs[0].laboratorio;
        this.gestionarOrdenCompraService.selectedOrdenCompra2.laboratorio = this.gestionarOrdenCompraService.proveedorLabs[0].laboratorio;

        console.log(this.gestionarOrdenCompraService.proveedorLabs[0].laboratorio);
  console.log(this.gestionarOrdenCompraService.selectedProveedor3.laboratorio);*/
       // this.gestionarOrdenCompraService.selectedProveedor3.laboratorio=form.value.laboratorio;
      },
      err => console.error(err)

    )


  }

  
getLabByProveedorA(proveedor: string){
    this.gestionarOrdenCompraService.getLabByNombreP(proveedor).subscribe(
      res =>{
      //  this.gestionarOrdenCompraService.proveedores=res;
        console.log('LAB')
        this.gestionarOrdenCompraService.proveedorLabs= res;/*
        this.gestionarOrdenCompraService.selectedProveedor3.laboratorio = this.gestionarOrdenCompraService.proveedorLabs[0].laboratorio;
        this.gestionarOrdenCompraService.selectedOrdenCompra2.laboratorio = this.gestionarOrdenCompraService.proveedorLabs[0].laboratorio;

        console.log(this.gestionarOrdenCompraService.proveedorLabs[0].laboratorio);
  console.log(this.gestionarOrdenCompraService.selectedProveedor3.laboratorio);*/
       // this.gestionarOrdenCompraService.selectedProveedor3.laboratorio=form.value.laboratorio;
      },
      err => console.error(err)

    )


  }

  getLabPrueba(){
    this.gestionarOrdenCompraService.getLabByNombreP('EmpresaSA2').subscribe(
      res =>{
        this.gestionarOrdenCompraService.proveedorLabs=res;
  
      },
      err => console.error(err)

    )


  }
  getOrdenCompra(ordenCompra2: OrdenCompra2 ){
    this.gestionarOrdenCompraService.selectedOrdenCompra2=ordenCompra2;


  }

  getOrdenCompraDetail(ordenCompra2: OrdenCompra2 ){
    this.gestionarOrdenCompraService.selectedOrdenCompraDetail=ordenCompra2;
    this.getDetalles();

  }
  
  clickMostrar(){
    this.gestionarOrdenCompraService.selectedOrdenCompra2.fecha=this.test;
    this.gestionarOrdenCompraService.selectedOrdenCompra2.categoria="Categoria.";
    this.gestionarOrdenCompraService.selectedOrdenCompra2.medicamento="Medicamento.";
    this.gestionarOrdenCompraService.selectedOrdenCompra2.unidad="Unidad.";
    this.gestionarOrdenCompraService.selectedOrdenCompra2.formaPago="Forma Pago.";
    this.gestionarOrdenCompraService.selectedOrdenCompra2.laboratorio="Laboratorio.";
    this.gestionarOrdenCompraService.selectedOrdenCompra2.proveedor="Proveedor.";
    let element: HTMLElement =document.getElementById('mostrarBoton') as HTMLElement;
         
    element.click();  

  }

  clickCleanActualizar(){
   

     

    this.gestionarOrdenCompraService.selectedOrdenCompra3A.laboratorio="Laboratorio.";
    this.gestionarOrdenCompraService.selectedOrdenCompra3A.categoria="Categoria.";
    this.gestionarOrdenCompraService.selectedOrdenCompra3A.medicamento="Medicamento.";
    this.gestionarOrdenCompraService.selectedOrdenCompra3A.unidad="Unidad.";
    let element: HTMLElement =document.getElementById('cleanFormA') as HTMLElement;
         
    element.click(); 
  }

  getOrdenCompraCodigoUltimo(){
    this.gestionarOrdenCompraService.getCodigoOrdenCompra().subscribe(
      res =>{
        this.gestionarOrdenCompraService.ordenCompras2= res;
        if(res.length==0){
          this.gestionarOrdenCompraService.selectedOrdenCompra2.codigo=1; 

        }else{
          console.log("Ultimo Codigo: " + this.gestionarOrdenCompraService.ordenCompras2[0].codigo);
          this.gestionarOrdenCompraService.selectedOrdenCompra2.codigo=this.gestionarOrdenCompraService.ordenCompras2[0].codigo+1; 
        }
        
      },
      err => console.error(err)
    )
  }
  
  addOrdenCompra(form: NgForm){
  
    if(form.invalid){
      this.isError=true;
    }else{
       this.isError=false;
      this.gestionarOrdenCompraService.getMedicamentoOCByCodigo(form.value.codigo).subscribe(
        res =>{
          this.gestionarOrdenCompraService.medicamentoOCs= res;
  
          if(res.length==0){
            this.isError2 = true;
        //NO ingresaste ninguna orden medicamento
            
         }else{
           this.isError2=false;
           if(this.isError==false && this.isError2==false){

            this.gestionarOrdenCompraService.createOrdenCompra(form.value).subscribe(
              (res)=> {
              this.getCategorias();
              this.resetForm(form);

              },
              (err) => console.error(err)
        
            );
            let element: HTMLElement =document.getElementById('cerrarModalR') as HTMLElement;
             
            element.click();  
            console.log("Añadido");
    
          }
         }
          
        },
        err => console.error(err)
      )
      
    
    }
    }

    updateOrdenCompra(form: NgForm){
      if(form.invalid){
        this.isError=true;
      }else{
        this.isError=false;
       this.gestionarOrdenCompraService.getMedicamentoOCByCodigo(form.value.codigo).subscribe(
         res =>{
           this.gestionarOrdenCompraService.medicamentoOCs= res;
   
           if(res.length==0){
             this.isError2 = true;
         //NO ingresaste ninguna orden medicamento
             
          }else{
            this.isError2=false;
            if(this.isError==false && this.isError2==false){
 
             this.gestionarOrdenCompraService.putOrdenCompra(form.value).subscribe(
               (res)=> {
               this.getCategorias();
             //  this.resetForm(form);
               },
               (err) => console.error(err)
         
             );
             let element: HTMLElement =document.getElementById('cerrarModalRA') as HTMLElement;
              
             element.click();  
              console.log("Añadido");
     
           }
          }
           
         },
         err => console.error(err)
       )
       
     
     }

    
      
      //console.log(form.value);
    }


    cleanFormActualizar(){
      this.gestionarOrdenCompraService.selectedOrdenCompra3A.laboratorio="Laboratorio.";
      this.gestionarOrdenCompraService.selectedOrdenCompra3A.categoria="Categoria.";
      this.gestionarOrdenCompraService.selectedOrdenCompra3A.medicamento="Medicamento.";
      this.gestionarOrdenCompraService.selectedOrdenCompra3A.unidad="Unidad.";
      this.gestionarOrdenCompraService.selectedMedicamentoOCA.cantidad=null;
      this.gestionarOrdenCompraService.selectedMedicamentoPSA.stockActual=null;
      this.gestionarOrdenCompraService.selectedMedicamentoOCA.precio=null;
      this.gestionarOrdenCompraService.selectedMedicamentoOCA.total=null;
    }

    cleanFormRegistrar(){

      this.gestionarOrdenCompraService.selectedMedicamentoOC.cantidad=null;
      this.gestionarOrdenCompraService.selectedMedicamentoPS.stockActual=null;
      this.gestionarOrdenCompraService.selectedMedicamentoOC.precio=null;
      this.gestionarOrdenCompraService.selectedMedicamentoOC.total=null;
      this.gestionarOrdenCompraService.selectedMedicamentoOC.tipo=null;
      this.gestionarOrdenCompraService.selectedMedicamentoOC.tipoUnidad=null;


    }
/*

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
  }

  updateCategoriaM(form: NgForm){

    if(form.value._id){
    this.gestionarCategoriaService.putCategoria(form.value).subscribe(
      res  => console.log(res),
      err => console.error(err)
    );
    }
  }
   
  getCategoria(categoria: Categoria ){
    this.gestionarCategoriaService.selectedCategoria2=categoria;
    const nombre23=categoria.nombre;
    console.log(nombre23);
    this.gestionarCategoriaService.selectedCategoria4.nombre=nombre23;

  }

  resetForm(form:NgForm){
    form.reset();
  }

*/
  //Buscar Por nombre de la categoria actualizando el arreglo categoria
  
  searchByNombreProveedor(form: NgForm){
    this.gestionarOrdenCompraService.getOrdenCompraByProveedor(form.value.proveedor).subscribe(
      res =>{
        this.gestionarOrdenCompraService.ordenCompras= res;
        
      },
      err => console.error(err)
    )

  };
  deleteMedicamentoOCT(form: NgForm){
      
    this.gestionarOrdenCompraService.deleteMedicamentoOC(form.value.codigo).subscribe(
      (res) => {console.log(res)
        this.prueba=false;     
        this.sumaTotal=0;
      }
      ,
      (err) => console.log(err)
    );
    
  }
  
  deleteOneMedicamentoOC(id: string){
      
    /* let element: HTMLElement =document.getElementById('mostrarBotonA') as HTMLElement;
             
             element.click();  
     */
    this.gestionarOrdenCompraService.deleteMedicamentosOC(id).subscribe(
      (res) =>{
        let element: HTMLElement =document.getElementById('mostrarBoton') as HTMLElement;
             
             element.click();  
      }
      ,
      (err) => console.log(err)
    );
    
  }

  deleteOneMedicamentoOCA(id: string){
      
    /* let element: HTMLElement =document.getElementById('mostrarBotonA') as HTMLElement;
             
             element.click();  
     */
    this.gestionarOrdenCompraService.deleteMedicamentosOC(id).subscribe(
      (res) =>{
        let element: HTMLElement =document.getElementById('mostrarBotonA') as HTMLElement;
             
             element.click();  
      }
      ,
      (err) => console.log(err)
    );
    
  }

/*
  searchByNombreA(form: NgForm){
    if(form.invalid){
      this.isError = true;
    }else{
    this.gestionarCategoriaService.getCategoriaByNombreA(form.value.nombre).subscribe(
      res =>{
        this.gestionarCategoriaService.categorias= res;
        
         if(res.length>0){
            this.isError2 = true;

         }
         

         if(this.isError==false && this.isError2==false){

           this.isConfirmation=true;

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

         if(res.length>0){
            this.isError2 = true;
         }
         /////--------------------------
         console.log(this.isError2);
         if(form.value.nombreE==form.value.nombre){
              this.isError2=false;
         }

         if(this.isError==false && this.isError2==false){

           this.isConfirmation=true;

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

    onCloseAlert2() {
      this.rdBR = 0;
      this.rdBV = 1;
    }

    deleteCategoria(id: string)id: string{
      
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

     */
      resetForm(form:NgForm){
        form.reset();
      }

}
