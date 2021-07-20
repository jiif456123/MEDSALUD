import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Alerta } from 'models/alertas.model';

@Injectable()
export class AlertaService{

    selectedAlerta:Alerta={
        _id:'',
         titulo:  '' ,
        mensaje: '' 
    };

    alerta: Alerta[]; //importamos desde el modelo tene objetos tipo medicamento
    readonly URL_API= "http://localhost:3000/farmacia/alerta/";
    constructor(private http: HttpClient){}


    getAlerta(){
      return this.http.get<any>(this.URL_API);
    }
    createAlerta(alerta: Alerta){
      return this.http.post(this.URL_API,alerta);
   }
}