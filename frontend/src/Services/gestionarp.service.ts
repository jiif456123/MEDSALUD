import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Gestionarp} from '../models/gestionarp.model';

@Injectable()

export class GestionarPservice{


  selectProveedor: Gestionarp={
     nombre: null,
     contacto:null,
     email: null, 
     estado: null,
     telefono: null,
     laboratorio:null
  };

  selectProveedor2: Gestionarp={
    nombre: null,
    contacto:null,
    email: null, 
    estado: null,
    telefono: null,
    laboratorio:null
 };


    //form
//categoriaM: CategoriaM[]; //guardamos las categorias en un arreglo
  proveedor: Gestionarp[];
  readonly URL_API= "http://localhost:3000/farmacia/proveedor/";
  constructor(private http: HttpClient){}


    getProveedor(){

        return this.http.get<Gestionarp[]>(this.URL_API);
    }

    createProveedor(proveedor:Gestionarp){
      return this.http.post(this.URL_API,proveedor);
    }

    updateProveedor(proveedor:Gestionarp){
      return this.http.put(this.URL_API + `/${proveedor._id}`, proveedor);
    }
  }