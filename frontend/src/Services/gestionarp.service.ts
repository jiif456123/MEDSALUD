import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Gestionarp} from '../models/gestionarp.model';

@Injectable()

export class GestionarPservice{


  selectProveedor: Gestionarp={
     nombre: '',
     email: '', 
     estado: '',
     telefono: 0
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
  }