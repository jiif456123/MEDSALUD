import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Pedido} from '../../models/pedido.model';
import * as Items from '../../app/farmacia/pedido/_files/Items.json';

@Injectable()
export class PedidoService{
  
  // getPedidos1(): Pedido[] {
  //   let pedidos1 = [
  //     {codigoPedido: 101,nombre: 'Giancarlo Ruiz',dni: 74866891, pedidos: [{codigo: 12344, producto: 'Paracetamol',laboratorio: '3M Healthcare',concentracion: '500mg',presentacion: 'Tableta',
  //      cantidad: 5, stockDisponible: 487,precioU: 7,importe: 35}, {codigo: 12345,producto: 'Amoxicilina', concentracion: '500mg',laboratorio: 'Abbott',presentacion: 'Tableta',cantidad: 5,
  //      stockDisponible: '487',precioU: 7,importe: 35}]
  //     }
  //   ];
  //   return pedidos1;
  // }
  //   getPedidoByNombre1(nombre:String): Pedido[]{
  //     let pedidos = this.getPedidos1();
  //     let pedido = pedidos.filter(item=>item.nombre==nombre)
  //     return pedido;
  //   }

  
  selectedPedido: Pedido={
    _id:'',
    codigoPedido:'',
    codigo: '',
    nombre:'',
    dni:null,
    medicamento:'',
    concentracion:'',
    presentacion:'',
    cantidad:null,
    stockDisponible:null,
    precioU:null,
    importe:null,
    total:null,
    fecha:null,
    estado:null,
    
};
  selectedPedido1: Pedido={
    _id:'',
    codigoPedido:null,
    codigo: null,
    nombre:'',
    dni:null,
    medicamento:'',
    concentracion:'',
    presentacion:'',
    cantidad:null,
    stockDisponible:null,
    precioU:null,
    total:null,
    importe:null,
    fecha:null,
    estado:null,
};


//medicamento: MedicamentoOC[];
 pedido: Pedido[]; //importamos desde el modelo tene objetos tipo 
  readonly URL_API_GET= "http://localhost:3000/farmacia/pedidos/";
  readonly URL_API_Busqueda= "http://localhost:3000/farmacia/pedidos/consulta-dni";
  constructor(private http: HttpClient){}

  

    getPedidos(){
      return this.http.get<any>(this.URL_API_GET);
    }

    createPedido(Pedido:Pedido){
      return this.http.post(this.URL_API_GET,Pedido);
   }
    updatePedido(Pedido:Pedido){
      return this.http.put(this.URL_API_GET + `/${Pedido._id}`, Pedido);
    }
    getPedidoByDni(dni: Number){
      if(dni.toString() !=''){
        return this.http.get<any>(this.URL_API_Busqueda+ `/${dni}`);
      }else{
        return this.http.get<any>(this.URL_API_Busqueda);
      }
    }

    // getPedidoEachOne(dni:number){
    //   if(dni.toString()!=''){
    //     return this.http
    //   }
    // }
    // getRecetabyDni(dni:Number){
    //   if(dni.toString() !=''){
    //     return this.http.get;
    //   }
    // }

    // getPedidoByDniJson(dni:Number){
    //     let pedidos = this.getRecetabyDni();
    //     let item = pedidos.filter(d=>d.dni==dni);
    //     return item;
    // }
}

/*
    deleteMedicamento(_id: string) {
      return this.http.delete(this.URL_API + /${_id});
    }*/
