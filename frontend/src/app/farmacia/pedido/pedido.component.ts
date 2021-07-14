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
    public subTotal=0;
    public precioCantidad=0;
    public totalSinIGV=0;
    public total=0;
    
    public pageSize = 7;
    public page;

    public ListItems:any = Items;

  // los datos se van guardando en un arreglo, el cual se usa para
  // desplegar la tabla
  medicamentos:any[] = [];
  // los input del formulario se asocian con un modelo
  dato:any = {};

//////////////////////////////
  medicamentos2: any[]=[];
  dato2:any[]=[];
  
  pedidos2:Pedido[]=[];
  

  // ver(){
  //   // //this.pedidoService.selectedPedido1 = pedido;
  //   for (let index = 0; index < this.pedidoService.selectedPedido1.medicamentos.length; index++) {
  //     this.precioCantidad=this.medicamentos[index].precio*this.medicamentos[index].cantidad;
  //   }
  //   this.subTotal+=this.precioCantidad

  //   this.totalSinIGV=this.subTotal*0.18;
  //   this.total=Math.round(this.subTotal+this.totalSinIGV);
  // }
  eliminarIndexDelRegistro(i){
    this.medicamentos.splice(i, 1)
    // console.log(this.pedidoService.selectedPedido1.medicamentos[i]);
    // console.log(i);
  }

  eliminarIndexDelEditar(i){
    this.pedidoService.selectedPedido1.medicamentos.splice(i, 1)
    // console.log(this.pedidoService.selectedPedido1.medicamentos[i]);
    // console.log(i);
  }

  getDatafromIndexEditar(i){
    console.log(this.pedidoService.selectedPedido1.medicamentos[i].codigo);
    console.log(this.pedidoService.selectedPedido1.medicamentos[i].medicamento);
    console.log(this.pedidoService.selectedPedido1.medicamentos[i].laboratorio);
    console.log(this.pedidoService.selectedPedido1.medicamentos[i].concentracion);
    console.log(this.pedidoService.selectedPedido1.medicamentos[i].presentacion);
    console.log(this.pedidoService.selectedPedido1.medicamentos[i].cantidad);
    console.log(this.pedidoService.selectedPedido1.medicamentos[i].precio);
  }

  guardar(){
    //console.log(this.medicamentos);
    // se inserta el dato en el arregloss
    this.medicamentos.push(this.dato);
    // se crea un nuevo objeto para almacenar nuevos datos
    this.dato = {};

    //calculo del subtotal y total
    for (let index = 0; index < this.medicamentos.length; index++) {
      this.precioCantidad=this.medicamentos[index].precio*this.medicamentos[index].cantidad;
    }
    this.subTotal+=this.precioCantidad

    this.totalSinIGV=this.subTotal*0.18;
    this.total=Math.round(this.subTotal+this.totalSinIGV);

    //console.log(this.medicamentos);
  }
  guardarUpdate(){
    //this.pedidoService.selectedPedido1.medicamentos=this.medicamentos;
    console.log(this.pedidoService.selectedPedido1.medicamentos);
    // se inserta el dato en el arregloss
    this.pedidoService.selectedPedido1.medicamentos.push(this.dato);
    // se crea un nuevo objeto para almacenar nuevos datos
    this.dato = {};

    //calculo del subtotal y total
    for (let index = 0; index < this.pedidoService.selectedPedido1.medicamentos.length; index++) {
      this.precioCantidad=this.pedidoService.selectedPedido1.medicamentos[index].precio*this.pedidoService.selectedPedido1.medicamentos[index].cantidad;
    }
    this.subTotal+=this.precioCantidad

    this.totalSinIGV=this.subTotal*0.18;
    this.total=Math.round(this.subTotal+this.totalSinIGV);

    //console.log(this.medicamentos);
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
    public pedidoService1=this.pedidoService;
    constructor( public pedidoService: PedidoService,private datePipe: DatePipe) {
      
      this.test = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    }
    public sumaTotal=0;
    pedidos = []

   

   ngOnInit(): void {
      this.getPedidos();
      //this.disableUpdateButton();
    }

    limpiarTabla(){
      this.medicamentos.length=0;
    }

    disableUpdateButton(){
      //var xd = document.getElementById('editarButton');
      //console.log(this.pedidos[0]);
      // this.pedidos.forEach(e => {
      //   console.log(this.pedidos[5].estado);
      // });
      // console.log(this.pedidos);
      // var index=0;
      // console.log(this.pedidos[index].estado);
    }

    eliminarDatofromMedicamentos(){
      for (let index = 0; index < this.medicamentos.length; index++) {
        //console.log(this.medicamentos[index]);
         this.medicamentos.splice(index);
      }
     // this.medicamentos.indexOf()
    //   var array = [3, 5, 9];
    //   var index = array.indexOf(5);

    //   if (index > -1) {
    //     array.splice(index, 1);
    //  }
      //console.log(this.medicamentos[index]);
    }
    
    changeEstadoPedido(){
      
      var uno = document.getElementById('botonEstado');
                if (uno.innerText  == 'Solicitado') 
                     uno.innerText  = 'Pagado',
                     document.getElementById('botonEstado').style.backgroundColor='rgba(0, 189, 0, 0.5)';
                     else if(uno.innerText  == 'Pagado')
                     uno.innerText = 'Entregado',
                     document.getElementById('botonEstado').style.backgroundColor='skyblue';
                     else uno.innerText = 'Solicitado',
                     document.getElementById('botonEstado').style.backgroundColor='rgb(235, 233, 233)';
    }
    
    getPedidos(){
      this.pedidoService.getPedidos().subscribe(
        response =>{
          this.pedidos = response.data;
          this.page=1;
        });
      }
      getPedidos1(pedido:Pedido) {
        //console.log(pedido);
        this.pedidoService.selectedPedido1 = pedido;
        // console.log(pedido);
        // console.log(pedido.medicamentos);
      }

      ver(){
        //console.log(this.pedidoService.selectedPedido1.medicamentos);
        for (let index = 0; index < this.pedidoService.selectedPedido1.medicamentos.length; index++) {
          this.precioCantidad=this.pedidoService.selectedPedido1.medicamentos[index].precio*this.pedidoService.selectedPedido1.medicamentos[index].cantidad;
          this.subTotal+=this.precioCantidad;
        }
        this.totalSinIGV=this.subTotal*0.18;
        this.total=Math.round(this.subTotal+this.totalSinIGV);
      }

      limpiarForm(){
        this.subTotal=0;
        this.total=0;
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
  
    addPedido(form: NgForm){
      //console.log(form.value.medicamentos);
      form.value.medicamentos=this.medicamentos;
      console.log(this.medicamentos);
      this.pedidoService.createPedido(form.value).subscribe(
        (res)=> {console.log('Agregado a la BD');
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
        
        updatePedido(form:NgForm){
          //console.log(form.value.medicamentos);
          //console.log(form.value.selectedPedido1.medicamentos);
          form.value.medicamentos2=this.pedidoService.selectedPedido1.medicamentos;
          //form.value.medicamentos2=this.medicamentos2;
          this.pedidoService.updatePedido(form.value).subscribe(
            res =>{console.log('Agregado a la BD');
              //form.value.pedidoService.selectedPedido1.medicamentos=this.pedidoService.selectedPedido1.medicamentos;
                //  this.getPedidos();
            },
            err => console.log(err)
          )}
          
          onKey(event) {const inputValue = event.target.value;}
  }
  // getPedido1(pedido:Pedido) {
        //   // console.log(pedido._id);
        //   // console.log(this.pedidoService.selectedPedido1);
        //   this.pedidoService.selectedPedido1 = pedido;
        // }