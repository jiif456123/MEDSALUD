import { Component, OnInit} from '@angular/core';
import { PedidoService } from 'Services/pedido/pedido.service';
import { NgForm } from "@angular/forms"; //para add
import { Pedido} from 'models/pedido.model';
import * as Items from './_files/Items.json';
import {DatePipe} from '@angular/common';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
    selector: 'app-pedido',
    templateUrl: './pedido.component.html',
    styleUrls: [ './pedido.component.css'],
    providers: [PedidoService,DatePipe]
  })
  export class pedidoComponent implements OnInit {
    public pageSize = 7;
    public page;

    public ListItems:any = Items;

  // los datos se van guardando en un arreglo, el cual se usa para
  // desplegar la tabla
  medicamentos:any[] = [];
  pedidos2:Pedido[]=[];
  // los input del formulario se asocian con un modelo
  dato:any = {};

  
  guardar(){
    console.log(this.medicamentos);
    // se inserta el dato en el arregloss
    this.medicamentos.push(this.dato);
    // se crea un nuevo objeto para almacenar nuevos datos
    this.dato = {};
  }

    medicamentosList:string[]=["Paracetamol","Panadol","Amoxicilina","Welton","Limonada Marcos","Ivermentina","Acitromicina"];
     presentacionList:string[]=["Tabletas","Inyectables","Jarabes", "Elixir", "Gotas", "Capsulas"];
    // ubicacionlist:string[]=["Pabellon A","Pabellon B","Pabellon C", "Pabellon D", "Pabellon E", "Pabellon F"];
     laboratorioList:string[]=["FarmaIndustria","johnson & johnson","Pfizer"];
    // categorialist:string[]=["Oral","Inyectables","Liquidos"];
     concentracionList: string[] = ['500mg', '500ml'];
     selectDispo='';
  
    //creamos instancia gestionarCategoriaService para usar los metodos que usamos en la clase GESTIONARCATEGORIASSERVICE
    myDate = new Date();
    test: string;
    constructor(public pedidoService: PedidoService,private datePipe: DatePipe) {
      this.test = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    }
    public sumaTotal=0;
   pedidos = []

   name = 'Angular';
   total:number;

   ngOnInit(): void {

      this.getPedidos();
      // this.pedidoService.listar().subscribe(
      //   data=>{
      //     this.pedidos2=data.data;
      //     var total = 0;
      //     total = total+this.
      //   }
      // );
    }
    
    getPedidos(){
      this.pedidoService.getPedidos().subscribe(
        response =>{
          this.pedidos = response.data;
          this.page=1;
        });
      }
      getPedidos1(pedido:Pedido) {
        console.log(pedido);
        this.pedidoService.selectedPedido1 = pedido;
      }
      
      getPedidoByDni(dni:Number){
        this.sumaTotal=0;
      if(dni.toString() !=''){
      this.pedidoService.getPedidoByDni(dni).subscribe(
        data=>
        {
          this.pedidos=data
        },
        err=>{console.error(err)}
      )}else{this.getPedidos()}
    }
    getPedidoByDni1(dni:Number){
      if(dni.toString() !=''){
      this.pedidoService.getPedidoByDni(dni).subscribe(
        data=>{this.pedidos=data},
        err=>{console.error(err)}
      )}else{this.getPedidos()}
    }

    changeStatus(){
      let i:HTMLElement=document.getElementById("boton")
    }
    
   suma(cantidad,precio){
     
    return 1 + this.suma(cantidad, precio - 1);       
      //  num + this.suma(num-1);
  }

  multi(cantidad,precio){
    return cantidad*precio;
  }
   
    

    multiplicarPriceAndCantidad(){
      this.pedidoService.selectedPedido.total=this.dato.precio*this.dato.cantidad;
    }
    // sumaSubTotal(){
    //   const sum =  pista.pistas.reduce((actual, anterior) => return actual + anterior);
    // }
  
    addPedido(form: NgForm){
      form.value.medicamentos=this.medicamentos;
      console.log(form.value);
      this.pedidoService.createPedido(form.value).subscribe(
        (res)=> {console.log('Agregado a la BD');

        // this.getPedidos();
      },
        (err) => {
          //console.error(err);
          console.log(err);
        }
        );
      }

      resetForm(form:NgForm){
        form.reset();
        }

        getPedido1(pedido:Pedido) {
          console.log(pedido._id);
          console.log(this.pedidoService.selectedPedido1);
          this.pedidoService.selectedPedido1 = pedido;
        }
        
        updatePedido(form:NgForm){
          this.pedidoService.updatePedido(form.value).subscribe(
            res =>{
              
                // this.getPedidos();
            },
            err => console.error(err)
          )}
          
          onKey(event) {const inputValue = event.target.value;}
  }
  


  
  // multiplicarPriceAndCantidad(){
  //   this.pedidoService.selectedPedido.importe=this.pedidoService.selectedPedido.precioU*this.pedidoService.selectedPedido.cantidad;
  // }

  // cantidad:number;
  // precioU:number;
  // importe:number;
  // Multiplicar(){
  // this.importe=this.cantidad*this.precioU;    
  // }


  //Calculamos el TOTAL
      // this.total = this.pedidoService.selectedPedido1.medicamentos.reduce(
      //   (acc,obj,) => acc + (obj.precio * obj.cantidad),0);
      //   //console.log(this.pedidoService.selectedPedido1.medicamentos);
      // console.log("Total: ", this.total);