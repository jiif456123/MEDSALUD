import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable()

export class movimientoMService{

  movimientoM:  movimientoMService[]; //importamos desde el modelo tene objetos tipo medicamento
  readonly URL_API= "http://localhost:3000/farmacia/movimientoM/";
  constructor(private http: HttpClient){}

    getMovimientoM(){
      return this.http.get<any>(this.URL_API);
    }
}

