import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable()

export class movimientoMService{

  movimientoM:  movimientoMService[]; //importamos desde el modelo tene objetos tipo medicamento
  readonly URL_API= "http://localhost:3000/farmacia/movimientoM/";
  readonly URL_API_1= "http://localhost:3000/farmacia/movimientoM/Filtro";
  constructor(private http: HttpClient){}

    getMovimientoM(){
      return this.http.get<any>(this.URL_API);
    }
    getfiltrar(Modo,Tipo,fechaInicial,fechaFinal){
      return this.http.get<any>(this.URL_API+'Filtro'+ `/${Modo}`+`/${Tipo}`+`/${fechaInicial}`+`/${fechaFinal}`);
    }
}