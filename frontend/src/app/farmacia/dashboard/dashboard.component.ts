import { Component, OnInit } from '@angular/core';
import { GestionarOrdenCompraService } from 'Services/gestionarOrdenCompra.service';
import { NgForm, FormGroup,FormControl, Validators } from '@angular/forms'; //para add
import { OrdenCompra,OrdenCompra2 } from '../../../models/gestionarOrdenCompra.model';
import { EjemplarEquipoMedicoService } from 'Services/ejemplarEquipoMedico.service';
import { movimientoMService } from 'Services/movimientoM.service';
import { MedicamentoService } from 'Services/medicamento.service';

//CHART JS
import {Chart,registerables} from 'chart.js';

import { EquiposMedicosService } from 'Services/equiposMedicos.service';
import { EquiposMedicos } from 'models/equiposMedicos.model';
import { UserService } from '../services/user.service';
import {GestionarPservice } from 'Services/gestionarp.service';

import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';


@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css'],
  //Se agrego en providers GestionarOrdenCompraComponent por el error  The pipe ' ' could not be found angular2 custom pipe
  providers: [GestionarOrdenCompraService,movimientoMService,EjemplarEquipoMedicoService,MedicamentoService,UserService,GestionarPservice]
})


export class Dashboard implements OnInit {

 constructor(public gestionarOrdenCompraService: GestionarOrdenCompraService, public ejemplarEquipoMedicoService : EjemplarEquipoMedicoService, public movimientoMService: movimientoMService,
    public equiposMedicosService: EquiposMedicosService,public medicamentoService: MedicamentoService, public userService: UserService,public gestionarpservice:GestionarPservice) { 
    Chart.register(...registerables);


  }


  public monthSelected;
  public nombreEquipoSelected;
  public nombreCategoriaSelected;
  public cantidadEmpleados=0;
  public cantidadProveedores=0;

  public numeroMesConver=0;
  public myChart: Chart;
  public myChartCircular: Chart;
  public myChartBarra: Chart;

  public myCar = new Object();

  ngOnInit(): void{//  NEW 
    
    //this.getMedPriceStockByNombre();
   // this.setGraficoCircular("myChart");
   this.getEstadoOrdenDeCompra();
    this.monthSelected="Selecciona un Mes";
    this.getCantidadEmpleados();
    //this.mostrarMes();
    this.getMovimientoMFecha2();
    console.log(this.monthSelected);
    this.llenarListAndArrayEquipo();
    this.nombreEquipoSelected="Selecciona un Equipo";
    this.llenarArrayNombreEquipo();
    //this.setGraficoBarra("myChartOneBar");
    this.llenarArrayCategoriaMedicamento();
    this.nombreCategoriaSelected="Todo";
    if((this.nombreCategoriaSelected!="Selecciona una Categoria" || this.nombreCategoriaSelected!="Todo")){
        this.getCantidadMedbyCategoria();

    }
    if(this.nombreCategoriaSelected=="Todo"){
    this.getCountCantidadCategoria();
    console.log("CONDICION")
        }
    this.getCantidadProveedoresDisponible();
    }
    public meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto" , "Septiembre", "Octubre", "Noviembre","Diciembre", "Todos"];
    
    public nombreEquipos=[];
    public nombreCategorias=[];

    setGraficoCircular(canvas: string,data: any[]){
        if (this.myChartCircular) this.myChartCircular.destroy(); 
        this.myChartCircular = new Chart(canvas,{
            type: 'pie',
            data: {
                labels: ["Cantidad", "Disponibles", "Ocupados"]/*labels*/,
                datasets: [{
                    label: '# of Votes',
                    data: data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            }
        });
       
    }
    
    setGraficoBarraDoble(canvas: string,labels: any[],data1: any[], data2: any[]){
        if (this.myChart) this.myChart.destroy(); 
         this.myChart = new Chart(canvas,{
            type: 'bar',
            
            data: {
                labels: labels,
                
                datasets: [
                    {
                    label: '#Ingresos',
                    
                    data: data1,
                    backgroundColor: [
                        'rgba(222, 222, 240, 1)'
                        
                    ],
                    borderColor: [
                        'rgba(222,222, 240, 1)'
                        
                    ],
                    borderWidth: 1
                },
                {
                    label: '#Egresos',
                    data: data2,
                    backgroundColor: [
                        'rgba(167, 197, 235, 1)'
                        
                    ],
                    borderColor: [
                        'rgba(197, 197, 235, 1)'
                        
                    ],
                    borderWidth: 1
                }



                ]
            },


            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            },
        });
        
    } 
    
    setGraficoBarra(canvas: string,labels: any[], data: any[]){
        if (this.myChartBarra) this.myChartBarra.destroy(); 
        this.myChartBarra = new Chart(canvas,{
            type: "bar",
            data: {
                labels: labels/*labels*/,
                datasets: [{
                    indexAxis: "y",
                    label: 'Grafico de Barras Medicamento',
                    data: data,
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(255, 159, 64, 0.2)',
                      'rgba(255, 205, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(201, 203, 207, 0.2)'
                    ],
                    borderColor: [
                      'rgb(255, 99, 132)',
                      'rgb(255, 159, 64)',
                      'rgb(255, 205, 86)',
                      'rgb(75, 192, 192)',
                      'rgb(54, 162, 235)',
                      'rgb(153, 102, 255)',
                      'rgb(201, 203, 207)'
                    ],
                    borderWidth: 1
                  }]
            }
        });
    }
    


    //LLENA LA LISTA DEL HTML EQUIPO
    llenarListAndArrayEquipo(){
        this.equiposMedicosService.getEquiposMedicos().subscribe(
            res =>{
                const nombre = res.map(res => res.nombre);
                const unicos = nombre.filter((valor, indice) => {
                return nombre.indexOf(valor) === indice;
                  }
                );
                this.nombreEquipos=unicos;
                    
            },
            err => console.error(err)
          )    
        
    }


    //LLENA UN ARREGLO QUE CONTIENE LA CANTIDAD, DISPONIBLE y NoDisponible De acuerdo al nombre que se selecione en la lista del HTML
    //getCantidad Disponible y noDisponible de EquiposMedicos y Manda Datos a Grafico Circular
    llenarArrayNombreEquipo(){
        var arrayContador=[];
        var cantidad=0;
        var disponible=0;
        var noDisponible=0;
        this.equiposMedicosService.getEquiposMedicos().subscribe(
            res =>{
                const nombre = res.map(res => res.nombre);
            if(this.nombreEquipoSelected=="Selecciona un Equipo"|| this.nombreEquipoSelected=="Todo"){
                    console.log("SIN SELECCIONARRRR")
                    for (let index = 0; index < res.length; index++) {
                        cantidad+=res[index]["cantidad"];
                        disponible+=res[index]["disponible"];
                        noDisponible+=res[index]["noDisponible"];
                        /*
                        arrayContador[0]=res[index]['cantidad'];
                        arrayContador[1]=res[index]['disponible'];
                        arrayContador[2]=res[index]['noDisponible'];*/
                       // console.log(cantidad);
                    }
                    /*
                    cantidad.forEach( function(valor, index) {
                        disponible+=cantidad[index];
                        //console.log("En el índice " + indice + " hay este valor: " + valor);
                    })*/
                    arrayContador[0]=cantidad;
                    arrayContador[1]=disponible;
                    arrayContador[2]=noDisponible;
                    console.log(cantidad)
                    this.setGraficoCircular("myChart",arrayContador);

            }else{
               for (let index = 0; index < res.length; index++) {

                   // const element = res[index];
                   const nombreIteracion = res[index]['nombre'];
                    if(nombreIteracion==this.nombreEquipoSelected){

                        //== A NGMODEL QUE CAMBIA DE VALOR CADA VES
                        arrayContador[0]=res[index]['cantidad'];
                        arrayContador[1]=res[index]['disponible'];
                        arrayContador[2]=res[index]['noDisponible'];
                        console.log(res[index]['cantidad']);

                    }
                }

                //const nombre = res[index]['Medicamento']['nombre'];
                const unicos = nombre.filter((valor, indice) => {
                    return nombre.indexOf(valor) === indice;
                  }
                );
                 console.log(unicos);
                 console.log(arrayContador);
                 
                 this.setGraficoCircular("myChart",arrayContador);
                }
            },
            err => console.error(err)
          )
    }
    

    //ESTA FUNCION HACE QUE SE LLENE LA LISTA POR MNESES
    mostrarMes(){
        console.log(this.monthSelected);
        if(this.monthSelected=="Enero"){
            this.getMovimientoM("Enero");
        }
        if(this.monthSelected=="Febrero"){
            this.getMovimientoM("Febrero");
        }
        if(this.monthSelected=="Marzo"){
            this.getMovimientoM("Marzo");
        }
        if(this.monthSelected=="Abril"){
            this.getMovimientoM("Abril");
        }
        if(this.monthSelected=="Mayo"){
            this.getMovimientoM("Mayo");
        }
        if(this.monthSelected=="Junio"){
            this.getMovimientoM("Junio");
        }
        if(this.monthSelected=="Julio"){
            this.getMovimientoM("Julio");
        }
    
        if(this.monthSelected=="Agosto"){
            this.getMovimientoM("Agosto");
        }
        if(this.monthSelected=="Septiembre"){
            this.getMovimientoM("Septiembre");
        }
        if(this.monthSelected=="Octubre"){
            this.getMovimientoM("Octubre");
        }
        if(this.monthSelected=="Noviembre"){
            this.getMovimientoM("Noviembre");
        }
        if(this.monthSelected=="Diciembre"){
            this.getMovimientoM("Diciembre");
        }
        if(this.monthSelected=="Todos"){
            this.getMovimientoMFecha2();
        }
      /*  if(this.monthSelected=="Febrero"){
                this.getMovimientoM("Febrero");
        }*/
        //FALTA AGREGAR MAS MESES
    }

    //LLENA EL CHART DE BARDOBLES CON LOS DATOS DE ACUERDO A LA FECHA Y QUE TENGAN COMO TIPO INGRESO O EGRESO
    getMovimientoMFecha2(){

        this.movimientoMService.getMovimientoM2().subscribe(
            res =>{

                var ingresosFecha=[];
                var egresosFecha=[];
                var nombres=[];
            //Consigue todos los nombres de los medicamentos
            const nombre = res.map(res => res.Medicamento.nombre);
            //Elimina los nombre duplicados y los guardar en una const unicos
            const unicos = nombre.filter((valor, indice) => {
                    return nombre.indexOf(valor) === indice;
            });

            console.log(unicos);
            

            //Medicamentos con tipo "Ingreso"------------------------------------------------

            var result = res.filter((x,index) => { 

                console.log(index);
                return (x.tipo =="Ingreso") ; 
            });
            console.log(result)
            var count=[];
    
            result.forEach(function(valor, indice) {
               count[indice]=result[indice]["Medicamento"]["nombre"];
            });               
            console.log(count);
            //ORDENAR DE ACUERDO AL NOMBRE
            count.sort();
            const counts = {};
            count.forEach(function (x) { 
            counts[x] = (counts[x] || 0) + 1; 
            });
            const list = Object.entries(counts)
            // map to {type, count}
            .map(([type, count]) => ({type, count}));
            console.log( list);

            //list contiene los nombres de los medicamentos que tiene como tipo="Ingreso"
            //-Reccore list de acuerdo al tamaño de unicos("Array que contiene los nombres sin repetir")
            //y llena en list los nombres("Contenidos en el array unicos") que no estan en este agregandole como cont el 0  
            for (let index = 0; index < unicos.length; index++) {

                if(list[index]===undefined || list[index]["type"]!=unicos[index]){
                    const objeto2 = {
                        type: unicos[index],
                        count: 0
                    }
                    console.log("No se encontro en la lista: "+unicos[index]);
                          // list["type"] = unicos[index];
                          //  list["count"] = 0;
                        //  typeNObjeto2=unicos[index];
                    list.splice( index, 0, objeto2 );
                     

                          //  list.splice( index, 0, list["type"]=unicos[index] );
                            //list.splice( index, 0, list["count"]="0" );
                }
                ingresosFecha[index]=list[index]["count"];

            }


        //Medicamentos con tipo "Egreso"------------------------------------------------
            var result2 = res.filter((x,index) => { 
             
                
                return (x.tipo =="Egreso"); 
            });
                console.log(result2)
                var count2=[];
                
                result2.forEach(function(valor, indice) {
              
                   count2[indice]=result2[indice]["Medicamento"]["nombre"];
                });         
            //ORDENAR DE ACUERDO AL NOMBRE
            count2.sort();
            const counts2 = {};
            count2.forEach(function (x) {
                       counts2[x] = (counts2[x] || 0) + 1;           
            });

            const list2 = Object.entries(counts2)
                  // map to {type, count}
            .map(([type, count]) => ({type, count}));
            console.log( list2);
            console.log(unicos)

          


            //list 2 contiene los nombres de los medicamentos que tiene como tipo="Egreso"
            //-Reccore list2 de acuerdo al tamaño de unicos("Array que contiene los nombres sin repetir")
            //y llena en list2 los nombres("Contenidos en el array unicos") que no estan en este agregandole como cont el 0 
            for (let index = 0; index < unicos.length; index++) {

                if(list2[index]===undefined || list2[index]["type"]!=unicos[index]){
                    const objeto2 = {
                        type: unicos[index],
                        count: 0
                    }
                    console.log("No se encontro en la lista: "+unicos[index]);
                    list2.splice( index, 0, objeto2 );
                   
                    console.log(unicos.length);

                }
                egresosFecha[index]=list2[index]["count"];
                   // console.log(list2[index]["count"])
            }
            //console.log(list2);

            console.log(list);
            console.log(list2);
            for (let index = 0; index < list.length; index++) {
                //const element = array[index];
                if(list[index]["count"]!=0){
                    nombres[index]=list[index]["type"];

                }
                if(list2[index]["count"]!=0){
                    nombres[index]=list2[index]["type"];  
                }
            }
            nombres.sort();
            console.log(ingresosFecha);
            console.log(egresosFecha);
            console.log(nombres);
           // console.log()
            this.setGraficoBarraDoble("myChartBar",nombres,ingresosFecha,egresosFecha);

            },
            err => console.error(err)
              )
//    }   
        
            }

    //LLENA EL CHART DE BARDOBLES CON LOS DATOS QUE TENGAN COMO TIPO INGRESO O EGRESO
    getMovimientoM(mesBuscar: string){
        
     
                if(mesBuscar=="Enero"){
                    this.numeroMesConver=1;
                }if(mesBuscar=="Febrero"){
                    this.numeroMesConver=2;
                }
                if(mesBuscar=="Marzo"){
                    this.numeroMesConver=3;
                }
                if(mesBuscar=="Abril"){
                    this.numeroMesConver=4;
                }
                if(mesBuscar=="Mayo"){
                    this.numeroMesConver=5;
                }
                if(mesBuscar=="Junio"){
                    this.numeroMesConver=6;
                }
                if(mesBuscar=="Julio"){
                    this.numeroMesConver=7;
                }
                if(mesBuscar=="Agosto"){
                    this.numeroMesConver=8;
                }
                if(mesBuscar=="Septiembre"){
                    this.numeroMesConver=9;
                }
                if(mesBuscar=="Octubre"){
                    this.numeroMesConver=10;
                }
                if(mesBuscar=="Noviembre"){
                    this.numeroMesConver=11;
                }
                if(mesBuscar=="Diciembre"){
                    this.numeroMesConver=12;
              }
            
            
          // if(mesBuscar=="Enero"){
                this.movimientoMService.getMovimientoM2().subscribe(
                    res =>{
                        var ingresosFecha=[];
                        var egresosFecha=[];
                        var nombres=[];
                    //Consigue todos los nombres de los medicamentos
                    const nombre = res.map(res => res.Medicamento.nombre);
                    //Elimina los nombre duplicados y los guardar en una const unicos
                    const unicos = nombre.filter((valor, indice) => {
                            return nombre.indexOf(valor) === indice;
                    });

                    console.log(unicos);
                    
                   /* for (let index = 0; index < res.length; index++) {
                    var d=new Date(res[index]['fecha']);
                    var numeroMes=(d.getMonth()+1);
                    }*/

                    //Medicamentos con tipo "Ingreso"------------------------------------------------

                    var result = res.filter((x,index) => { 

                        console.log(index);
                        var d=new Date(res[index]['fecha']);
                        var numeroMes=(d.getMonth()+1);
                        return (x.tipo =="Ingreso" && numeroMes==this.numeroMesConver) ; 
                    });
                    console.log(result)
                    var count=[];
            
                    result.forEach(function(valor, indice) {
                       count[indice]=result[indice]["Medicamento"]["nombre"];
                    });   
                    count.sort();            
                    console.log(count);
            
                    const counts = {};
                    count.forEach(function (x) { 
                    counts[x] = (counts[x] || 0) + 1; 
                    });
                    const list = Object.entries(counts)
                    // map to {type, count}
                    .map(([type, count]) => ({type, count}));
                    console.log( list);

                    //list contiene los nombres de los medicamentos que tiene como tipo="Ingreso"
                    //-Reccore list de acuerdo al tamaño de unicos("Array que contiene los nombres sin repetir")
                    //y llena en list los nombres("Contenidos en el array unicos") que no estan en este agregandole como cont el 0  
                    for (let index = 0; index < unicos.length; index++) {

                        if(list[index]===undefined || list[index]["type"]!=unicos[index]){
                            const objeto2 = {
                                type: unicos[index],
                                count: 0
                            }
                            console.log("No se encontro en la lista: "+unicos[index]);
                                  // list["type"] = unicos[index];
                                  //  list["count"] = 0;
                                //  typeNObjeto2=unicos[index];
                            list.splice( index, 0, objeto2 );
                             

                                  //  list.splice( index, 0, list["type"]=unicos[index] );
                                    //list.splice( index, 0, list["count"]="0" );
                        }
                        ingresosFecha[index]=list[index]["count"];

                    }


                //Medicamentos con tipo "Egreso"------------------------------------------------
                    var result2 = res.filter((x,index) => { 
                        var d=new Date(res[index]['fecha']);
                        var numeroMes=(d.getMonth()+1);
                        
                        return (x.tipo =="Egreso" && numeroMes==this.numeroMesConver); 
                    });
                        console.log(result2)
                        var count2=[];
                        
                        result2.forEach(function(valor, indice) {
                      
                           count2[indice]=result2[indice]["Medicamento"]["nombre"];
                        });      
                    count2.sort();
   
                   // console.log()
                    const counts2 = {};
                    count2.forEach(function (x) {
                               counts2[x] = (counts2[x] || 0) + 1;           
                    });

                    const list2 = Object.entries(counts2)
                          // map to {type, count}
                    .map(([type, count]) => ({type, count}));
                    console.log( list2);

                    //list 2 contiene los nombres de los medicamentos que tiene como tipo="Egreso"
                    //-Reccore list2 de acuerdo al tamaño de unicos("Array que contiene los nombres sin repetir")
                    //y llena en list2 los nombres("Contenidos en el array unicos") que no estan en este agregandole como cont el 0 
                    for (let index = 0; index < unicos.length; index++) {

                        if(list2[index]===undefined || list2[index]["type"]!=unicos[index]){
                            const objeto2 = {
                                type: unicos[index],
                                count: 0
                            }
                            console.log("No se encontro en la lista: "+unicos[index]);
                            list2.splice( index, 0, objeto2 );
                           
                            console.log(unicos.length);

                        }
                        egresosFecha[index]=list2[index]["count"];

                    }
                    
                    console.log(list);
                    console.log(list2);
                    for (let index = 0; index < list.length; index++) {
                        //const element = array[index];
                        if(list[index]["count"]!=0){
                            nombres[index]=list[index]["type"];

                        }
                        if(list2[index]["count"]!=0){
                            nombres[index]=list2[index]["type"];  
                        }
                    }
                    nombres.sort();
                    console.log(ingresosFecha);
                    console.log(egresosFecha);
                    console.log(nombres);
                   // console.log()
                    this.setGraficoBarraDoble("myChartBar",nombres,ingresosFecha,egresosFecha);

                    },
                    err => console.error(err)
                      )
        //    }
    }
        
        
    //LLENA LA LISTA DEL HTML CategoriaMedicamento
    llenarArrayCategoriaMedicamento(){
     
        this.medicamentoService.getMedicamento2().subscribe(
            res =>{
            //console.log(res);
            const nombre = res.map(res => res.categoria);
            const unicos = nombre.filter((valor, indice) => {
            return nombre.indexOf(valor) === indice;
              }
            );
            this.nombreCategorias=unicos;
            },
            err => console.error(err)
        )
            
    }

    //get Cantidad de Medicamentos con la condicion de su Categoria y manda un grafico de Barras Horizontales

    getCountCantidadCategoria(){
        var nombresMed=[];
        var countMed=[];
        var cantidadM=[];
        var nombres2=[];
        var nombresSinRepetir=[];
        console.log(this.nombreCategoriaSelected);
        if(this.nombreCategoriaSelected==("Todo")){
            console.log("DASDASDASDASDASDASDASDDDD");
             this.medicamentoService.getMedicamento2().subscribe(
                res =>{
                   
                    for (let index = 0; index < res.length; index++) {
                      nombres2[index]=res[index]["categoria"];
                        
                    }
                    nombres2.sort();
                    console.log(nombres2);
                    //nombres2.sort();
                    const counts = {};
                    nombres2.forEach(function (x) { 
                    counts[x] = (counts[x] || 0) + 1; 
                    });
                    const list = Object.entries(counts)
                    // map to {type, count}
                    .map(([type, count]) => ({type, count}));
                    console.log( list);
                    
                   for (let index = 0; index < list.length; index++) {
                      cantidadM[index]=list[index]["count"];
                      nombresSinRepetir[index]=list[index]["type"];
                   }

                   
                    console.log(cantidadM);

                    this.setGraficoBarra("myChartOneBar",nombresSinRepetir,cantidadM);

                }, 
                err => console.error(err)
             )          
            }
    }
    getCantidadMedbyCategoria(){
        var nombresMed=[];
        var countMed=[];
        

        if((this.nombreCategoriaSelected!="Todo" )){
        this.medicamentoService.getMedicamento3(this.nombreCategoriaSelected).subscribe(
            res =>{
                

                
                var result = res.filter((x,index) => { 

                    console.log(index);
                    return (x.countMed !=0 ) ; 
                });
                console.log(result)
                //VIENE DEL  MONGO CON PROJECT Y GROUP
                for (let index = 0; index < result.length; index++) {
                     countMed[index]=result[index]["countMed"];
                     nombresMed[index]=result[index]["_id"];
                }
                
                console.log(countMed);
                console.log(nombresMed);
                this.setGraficoBarra("myChartOneBar",nombresMed,countMed);
            }
                
            ,
            err => console.error(err)
        )
        }
    }

    getNombreEquipo(mesBuscar: string){
        
     
            if(mesBuscar=="Enero"){
                this.numeroMesConver=1;
            }if(mesBuscar=="Febrero"){
                this.numeroMesConver=2;
            }
            if(mesBuscar=="Marzo"){
                this.numeroMesConver=3;
            }
            if(mesBuscar=="Abril"){
                this.numeroMesConver=4;
            }
            if(mesBuscar=="Mayo"){
                this.numeroMesConver=5;
            }
            if(mesBuscar=="Junio"){
                this.numeroMesConver=6;
            }
            if(mesBuscar=="Julio"){
                this.numeroMesConver=7;
            }
            if(mesBuscar=="Agosto"){
                this.numeroMesConver=8;
            }
            if(mesBuscar=="Septiembre"){
                this.numeroMesConver=9;
            }
            if(mesBuscar=="Octubre"){
                this.numeroMesConver=10;
            }
            if(mesBuscar=="Noviembre"){
                this.numeroMesConver=11;
            }
            if(mesBuscar=="Diciembre"){
                this.numeroMesConver=12;
          }
        
        
      // if(mesBuscar=="Enero"){
            this.movimientoMService.getMovimientoM2().subscribe(
                res =>{
                    
                    const nombre = res.map(res => res.Medicamento.nombre);
                    const tipo = res.map(res => res.tipo);
    
                    var contadorIngresoCe=0;
                    var contadorEgresoCe=0;
                    var contadorIngresoDiclo=0;
                    var contadorEgresoDiclo=0;
                    var contadorIngresoIver=0;
                    var contadorEgresoIver=0;
    
                    var arrayIngresos=[];
                    var arrayEgresos=[];
                 
                       
                    for (let index = 0; index < res.length; index++) {
                        var d=new Date(res[index]['fecha']);
                        var numeroMes=(d.getMonth()+1);
    
                        //Llena un arreglo con los nombre encontrados
                        const nombre = res[index]['Medicamento']['nombre'];
    
                        //solo agrega al contador si el mes es Enero
                        if(nombre=="Cetirizina" && res[index]['tipo']=="Ingreso" && numeroMes==this.numeroMesConver){
                            contadorIngresoCe++;
                         
                       //  console.log("FECHA:"+numeroMes);
                        }
                        if(nombre=="Cetirizina" && res[index]['tipo']=="Egreso" && numeroMes==this.numeroMesConver){
                            contadorEgresoCe++
                        }
    
                        //DICLOFENACO
                        if(nombre=="Diclofenaco 1% Gel" && res[index]['tipo']=="Ingreso" && numeroMes==this.numeroMesConver){
                            contadorIngresoDiclo++;
                        }
                        if(nombre=="Diclofenaco 1% Gel" && res[index]['tipo']=="Egreso" && numeroMes==this.numeroMesConver){
                            contadorEgresoDiclo++
                        }
                        //Ivermectina
                        if(nombre=="Ivermectina" && res[index]['tipo']=="Ingreso" && numeroMes==this.numeroMesConver){
                            contadorIngresoIver++;
                        }
                        if(nombre=="Ivermectina" && res[index]['tipo']=="Egreso" && numeroMes==this.numeroMesConver){
                            contadorEgresoIver++
                        }
    
                         console.log(nombre);
                        
                     }
                    
                    arrayIngresos[0]=contadorIngresoCe;
                    arrayIngresos[1]=contadorIngresoDiclo;
                    arrayIngresos[2]=contadorIngresoIver;
                    arrayEgresos[0]=contadorEgresoCe;
                    arrayEgresos[1]=contadorEgresoDiclo;
                    arrayEgresos[2]=contadorEgresoIver;
           
    
                    const unicos = nombre.filter((valor, indice) => {
                        return nombre.indexOf(valor) === indice;
                      }
                    );
                  
                    this.setGraficoBarraDoble("myChartBar",unicos,arrayIngresos,arrayEgresos);
                  
                },
                err => console.error(err)
          )
    //    }
            }


    getMovimientoMFecha(){

        this.movimientoMService.getMovimientoM2().subscribe(
            res =>{
            
                const nombre = res.map(res => res.Medicamento.nombre);
                const tipo = res.map(res => res.tipo);

               //const arrayAll= res.map(res=> res);
                //console.log(arrayAll);
                var contadorIngresoCe=0;
                var contadorEgresoCe=0;
                var contadorIngresoDiclo=0;
                var contadorEgresoDiclo=0;
                var contadorIngresoIver=0;
                var contadorEgresoIver=0;

                var arrayIngresos=[];
                var arrayEgresos=[];
                
               var fecha;

                for (let index = 0; index < res.length; index++) {

                    const nombre = res[index]['Medicamento']['nombre'];
                    //CETIRIZINA
                    if(nombre=="Cetirizina" && res[index]['tipo']=="Ingreso"){
                        contadorIngresoCe++;
                        fecha= res[index]['fecha'].getMonth;
                        //| date: "dd/MM/yyyy"
                    }
                    if(nombre=="Cetirizina" && res[index]['tipo']=="Egreso"){
                        contadorEgresoCe++
                    }

                    //DICLOFENACO
                    if(nombre=="Diclofenaco 1% Gel" && res[index]['tipo']=="Ingreso"){
                        contadorIngresoDiclo++;
                    }
                    if(nombre=="Diclofenaco 1% Gel" && res[index]['tipo']=="Egreso"){
                        contadorEgresoDiclo++
                    }
                    //Ivermectina
                    if(nombre=="Ivermectina" && res[index]['tipo']=="Ingreso"){
                        contadorIngresoIver++;
                    }
                    if(nombre=="Ivermectina" && res[index]['tipo']=="Egreso"){
                        contadorEgresoIver++
                    }

                     console.log(nombre);
                    
                 }
    
                arrayIngresos[0]=contadorIngresoCe;
                arrayIngresos[1]=contadorIngresoDiclo;
                arrayIngresos[2]=contadorIngresoIver;
                arrayEgresos[0]=contadorEgresoCe;
                arrayEgresos[1]=contadorEgresoDiclo;
                arrayEgresos[2]=contadorEgresoIver;
                console.log(arrayIngresos);
                console.log(arrayEgresos);
                console.log("Ingresos Cetirizina: "+contadorIngresoCe);
                console.log("Egresos Cetirizina: "+contadorEgresoCe);
                console.log("Ingresos Diclofenaco: "+contadorIngresoDiclo);
                console.log("Egresos Diclofenaco: "+contadorEgresoDiclo);
                console.log("Ingresos Ivermectina: "+contadorIngresoIver);
                console.log("Egresos Ivermectina: "+contadorEgresoIver);
                console.log("FECHA:"+fecha);

                console.log(res);
            //si el nombre tiene como valor tipo= a ingreso +1 ---- si tiene valor tipo= a egreso +1 

                    

                const unicos = nombre.filter((valor, indice) => {
                    return nombre.indexOf(valor) === indice;
                  }
                );
                console.log(unicos);

                console.log(nombre);
                console.log(tipo);
                this.setGraficoBarraDoble("myChartBar",unicos,arrayIngresos,arrayEgresos);
      
            },
            err => console.error(err)
      )}

      //Obtener cuantos elmpleados hay registrados
    getCantidadEmpleados() { 
 
        this.userService.listar().subscribe(
          res =>{
              
                this.cantidadEmpleados=res.data.length;
                    
                },
          err => console.error(err)
        )
    }
  //Obtener cuantos proveedores hay con estado disponible
    getCantidadProveedoresDisponible() { 
     var proveedoresDisp = [];
        this.gestionarpservice.getProveedor().subscribe(
          res =>{

              for (let index = 0; index < res.length; index++) {
                  if(res[index]["estado"]=="Disponible"){
                            proveedoresDisp[index]=res[index];
                  }
                    //proveedoresDisp[index]=res[index]["disponible"]
              }
             // console.log(res["diponible"]);
              //proveedoresDisp=res["estado"]["Disponible"].length;
            //console.log(proveedoresDisp);
            this.cantidadProveedores=proveedoresDisp.length;
              //console.log(proveedoresDisp.length);
              
               // this.cantidadEmpleados=res.data.length;
                    
                },
          err => console.error(err)
        )
    }



    //Obtener la cantidad de Ordenes de compra En espera Entregado y Cancelado
    
    getEstadoOrdenDeCompra(){
        this.gestionarOrdenCompraService.getOrdenCompras().subscribe(
            res =>{
               //  console.log(res);  
              //this.gestionarOrdenCompraService.ordenCompras= res;
               /*
              for (let index = 0; index < res.length; index++) {
                  // console.log(res[index]);
                }    */
                console.log(res);
              
            },
            err => console.error(err)
          )
    }

    
   
    





  
}

