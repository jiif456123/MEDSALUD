import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {CategoriaM} from '../models/categoriaM.model';



@Injectable()

export class CategoriaMService{
  
  
  selectedCategoriaM: CategoriaM={
     nombre: '',
     descripcion: '', 
     estado: 0,
  };
    //form
//categoriaM: CategoriaM[]; //guardamos las categorias en un arreglo
  categoriaM: CategoriaM[];
  readonly URL_API= "http://localhost:3000/farmacia/categoriaM/";
  constructor(private http: HttpClient){}
    

    getCategoriasM(){
      
        return this.http.get<CategoriaM[]>(this.URL_API);
    }
    //categoriaMService.createCategoriaM
    createCategoriaM(categoriaM:CategoriaM){
  return this.http.post(this.URL_API,categoriaM);
  }

    deleteCategoriasM(_id: string) {
      return this.http.delete(this.URL_API + `/${_id}`);
    }
/*
    //Añadir nueva metodo
    addCategoriaM(newCategoriaM){
    var headers= new HttpHeaders();    
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/categoriaM', newCategoriaM,{headers:headers})
    .map(res => res);
    
    }*/

    /*
    addCategoriaM(categoria: CategoriaM): Observable<CategoriaM> {
        return this.http.post<CategoriaM>('http://localhost:3000/categoriaM', categoria, HttpHeaders)
          .pipe(
            catchError(this.handleError('addHero', categoria))
          );
      }*/
}

