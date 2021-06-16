import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { MovimientoM } from 'models/movimientoM.model';

@Injectable()

export class movimientoMService{

  selectedMedicamento: MovimientoM={
    _id:'',
  };

  movimientoM:  movimientoMService[]; //importamos desde el modelo tene objetos tipo medicamento
  readonly URL_API= "http://localhost:3000/farmacia/movimientoM/";
  constructor(private http: HttpClient){}


    getMedicamento(){
      return this.http.get<any>(this.URL_API);
    }
}