import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {OrdenCompra, OrdenCompraCodigo, OrdenCompra2} from '../models/gestionarOrdenCompra.model';

import { Medicamento, MedicamentoN } from '../models/medicamento.model';
import { MedicamentoOC,MedicamentoPS } from '../models/medicamentoOC.model';

import {Gestionarp, ProveedorLab} from '../models/gestionarp.model';
import { Categoria } from '../models/categoria.model';


@Injectable()

export class GestionarOrdenCompraService{

  selectedOrdenCompra: OrdenCompra={
     codigo: null,
     proveedor: '',
     fecha: '', 
     formaPago: '',
     estado: '',
     totalD: null,
  };
  selectedOrdenCompra3: OrdenCompraCodigo={
    codigo: null,
    proveedor: '',
    fecha: '', 
    formaPago: '',
    estado: '',
    totalD: null,
 };
  selectedOrdenCompra2: OrdenCompra2={
    codigo: null,
    proveedor: '',
    fecha: '', 
    formaPago: '',
    estado: '',
    laboratorio: '',
    categoria: '',
    medicamento: '',
    cantidad: null,
    totalD: null,
    unidad: '',
 };
 selectedOrdenCompraDetail: OrdenCompra2={
  codigo: null,
  proveedor: '',
  fecha: '', 
  formaPago: '',
  estado: '',
  laboratorio: '',
  categoria: '',
  medicamento: '',
  cantidad: null,
  totalD: null,
  unidad: '',
};
 selectedOrdenCompra3A: OrdenCompra2={
  codigo: null,
  proveedor: '',
  fecha: '', 
  formaPago: '',
  estado: '',
  laboratorio: '',
  categoria: '',
  medicamento: '',
  cantidad: null,
  totalD: null,
  unidad: '',
};
 selectedOrdenCompraA:  OrdenCompra={
  codigo: null,
  proveedor: '',
  fecha: '', 
  formaPago: '',
  estado: '',
  totalD: null,
};

 selectedProveedor: Gestionarp={
  nombre: '',
  contacto: '',
  email: '', 
  estado: '',
  telefono: null,
  laboratorio: '',
};
selectedProveedor2: Gestionarp={
  nombre: '',
  contacto: '',
  email: '', 
  estado: '',
  telefono: null,
  laboratorio: '',
};

selectedProveedor3: ProveedorLab={
  nombre: '',
  contacto: '',
  email: '', 
  estado: '',
  telefono: null,
  laboratorio: '',
};


selectedMedicamentoPS: MedicamentoPS={
  
    precioUnitario: null,

    stockActual: null,

};

selectedMedicamentoPSA: MedicamentoPS={
  
  precioUnitario: null,

  stockActual: null,

};
selectedMedicamento2: MedicamentoN={
  
    codigo:'',
    nombre: '',
    disponibilidad: null,
    dosis: '',
    presentacion:'',
    precioUnitario: null,
    marca:  '',
    categoria: '',
    ubicacion: '',
    stockMin: null,
    stockMax: null,
    stockActual: null,
    detalles: '',

};

selectedMedicamentoOC: MedicamentoOC={
  /*
   _id?:string;
    codigo: string;
    laboratorio:   string;
    categoria:   string;
    medicamento:   string;
    cantidad:   number;
    precio: number;
    total:   number;
    unidad:   string;
  */
  codigo:'',
     laboratorio: '',
    categoria: '',
    medicamento: '',
    cantidad:null,
    precio: null,
    total:  null,
    unidad: '',
    tipo: '',
    tipoUnidad: '',


};
selectedMedicamentoOCA: MedicamentoOC={

    codigo:'',
    laboratorio: '',
    categoria: '',
    medicamento: '',
    cantidad:null,
    precio: null,
    total:  null,
    unidad: '',
    tipo: '',
    tipoUnidad: '',

};
  /*
  selectedCategoria2: Categoria={
    nombre: '',
    descripcion: '', 
    estado: 0,
 };
 selectedCategoria3: Categoria={
  nombre: '',
  descripcion: '', 
  estado: 0,
};
selectedCategoria4: Categoria={
  nombre: '',
  descripcion: '', 
  estado: 0,
};
*/



  ordenCompras: OrdenCompra[]; //importamos desde el modelo tene objetos tipo Categoria
  ordenCompras2: OrdenCompraCodigo[];//para id
  proveedores: Gestionarp[];
  proveedorLabs: ProveedorLab[];
  medicamentos: Medicamento[];
  medicamentos2: MedicamentoN[];
  medicamentosPSs: MedicamentoPS[];

  medicamentoOCs: MedicamentoOC[];
  
  readonly URL_API= "http://localhost:3000/farmacia/gestionarOrdenCompra/";
  readonly URL_APIP= "http://localhost:3000/farmacia/proveedor/";
  readonly URL_APIM= "http://localhost:3000/farmacia/medicamento/Nombre";
  readonly URL_APIMOC= "http://localhost:3000/farmacia/gestionaroMedicamentoOC/";
  readonly URL_APIDMOC= "http://localhost:3000/farmacia/gestionaroMedicamentoOC/eleminarMOC";

  readonly URL_APIPG= "http://localhost:3000/farmacia/proveedor/getNombre";
  readonly URL_APIPGM= "http://localhost:3000/farmacia/medicamento/getNombre";
  readonly URL_APIPGPSM= "http://localhost:3000/farmacia/medicamento/getPrecioAStock";
  readonly URL_APIOCCode= "http://localhost:3000/farmacia/gestionarOrdenCompra/getCodigoM/";

  //http://localhost:3000/farmacia/gestionarOrdenCompra/getCodigoM/
  //Para obtener medicamentos segun el codigo del provedor
  readonly URL_APIMOCG= "http://localhost:3000/farmacia/gestionaroMedicamentoOC/getMedicamentoOC";

  readonly URL_APIget= "http://localhost:3000/farmacia/gestionarOrdenCompra/getNombre";
  readonly URL_APIgetA= "http://localhost:3000/farmacia/gestionarCategorias/getNombreA";
  constructor(private http: HttpClient){}

  //let categoria of gestionarCategoriaService.categorias

    getOrdenCompras(){
      
        return this.http.get<OrdenCompra[]>(this.URL_API);
    }
    deleteMedicamentosOC(_id: string) {
      return this.http.delete(this.URL_APIMOC + `/${_id}`);
    }

    getCodigoOrdenCompra(){
      
      return this.http.get<OrdenCompraCodigo[]>(this.URL_APIOCCode);
    }
  

    getProveedores(){
      
      return this.http.get<Gestionarp[]>(this.URL_APIP);
    }

    getMedicamentos(){
      
      return this.http.get<Medicamento[]>(this.URL_APIM);
    }

    createOrdenCompra(ordenCompra:OrdenCompra){
    return this.http.post(this.URL_API,ordenCompra);
    }
    putOrdenCompra(ordenCompra:OrdenCompra){
      return this.http.put(this.URL_API + `/${ordenCompra._id}`, ordenCompra);
    }
    createMedicamentoOC(medicamentoOCs:MedicamentoOC){
      return this.http.post(this.URL_APIMOC,medicamentoOCs);
    }

    getLabByNombreP(nombre: string) {

        return this.http.get<ProveedorLab[]>(this.URL_APIPG + `/${nombre}`);
    
    }

    getMedicamentoOCByCodigo(nombre: number) {

      return this.http.get<MedicamentoOC[]>(this.URL_APIMOCG + `/${nombre}`);
  
  }

    getMedByCategoria(nombre: string) {

      return this.http.get<MedicamentoN[]>(this.URL_APIPGM + `/${nombre}`);
  
  }
  getMedPriceAStockByNombre(nombre: string) {

    return this.http.get<MedicamentoPS[]>(this.URL_APIPGPSM + `/${nombre}`);

}

  deleteMedicamentoOC(codigo: string) {
    return this.http.delete(this.URL_APIDMOC + `/${codigo}`);
  }
/*
    
    deleteCategoriasM(_id: string) {
      return this.http.delete(this.URL_API + `/${_id}`);
    }
    putCategoria(categoria: Categoria){
      return this.http.put(this.URL_API + `/${categoria._id}`, categoria);
    }
    // return this.http.put(`${this.URL_API}/${categoria._id}`, categoria);
  ///getNombre/:nombre
*/
    getOrdenCompraByProveedor(proveedor: string) {
      if(proveedor!=''){
        return this.http.get<OrdenCompra[]>(this.URL_APIget + `/${proveedor}`);
      }else{
        return this.http.get<OrdenCompra[]>(this.URL_API);
      }
   
    }
  /*
    getCategoriaByNombreA(nombre: string) {
      if(nombre!=''){
        return this.http.get<Categoria[]>(this.URL_APIgetA + `/${nombre}`);
      }else{
        return this.http.get<Categoria[]>(this.URL_API);
      }
   
    }
 */
    
}