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
    //form
//categoriaM: CategoriaM[]; //guardamos las categorias en un arreglo
  categorias: Categoria[];
  readonly URL_API= "http://localhost:3000/farmacia/gestionarCategorias/";
  constructor(private http: HttpClient){}
    

    getCategoriasM(){
      
        return this.http.get<Categoria[]>(this.URL_API);
    }
    //categoriaMService.createCategoriaM
    createCategoriaM(categoriaM:Categoria){
  return this.http.post(this.URL_API,categoriaM);
  }

    deleteCategoriasM(_id: string) {
      return this.http.delete(this.URL_API + `/${_id}`);
    }
}

