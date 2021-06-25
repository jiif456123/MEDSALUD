import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Categoria} from '../models/gestionarCategoria.model';


@Injectable()

export class GestionarCategoriaService{
  
  selectedCategoria: Categoria={
     nombre: '',
     descripcion: '', 
     estado: 0,
  };
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




  categorias: Categoria[]; //importamos desde el modelo tene objetos tipo Categoria

  readonly URL_API= "http://localhost:3000/farmacia/gestionarCategorias/";
  readonly URL_APIget= "http://localhost:3000/farmacia/gestionarCategorias/getNombre";
  readonly URL_APIgetA= "http://localhost:3000/farmacia/gestionarCategorias/getNombreA";
  constructor(private http: HttpClient){


  }

  //let categoria of gestionarCategoriaService.categorias

    getCategorias(){
      
        return this.http.get<Categoria[]>(this.URL_API);
    }

    createCategoria(categoria:Categoria){
    return this.http.post(this.URL_API,categoria);
    }

    deleteCategoriasM(_id: string) {
      return this.http.delete(this.URL_API + `/${_id}`);
    }
    putCategoria(categoria: Categoria){
      return this.http.put(this.URL_API + `/${categoria._id}`, categoria);
    }
    // return this.http.put(`${this.URL_API}/${categoria._id}`, categoria);
  ///getNombre/:nombre
  
    getCategoriaByNombre(nombre: string) {
      if(nombre!=''){
        return this.http.get<Categoria[]>(this.URL_APIget + `/${nombre}`);
      }else{
        return this.http.get<Categoria[]>(this.URL_API);
      }
   
    }
  
    getCategoriaByNombreA(nombre: string) {
      if(nombre!=''){
        return this.http.get<Categoria[]>(this.URL_APIgetA + `/${nombre}`);
      }else{
        return this.http.get<Categoria[]>(this.URL_API);
      }
   
    }
 
    
}

