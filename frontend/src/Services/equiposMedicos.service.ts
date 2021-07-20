import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { EquiposMedicos } from '../models/equiposMedicos.model';
import { environment } from '../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquiposMedicosService{

  selectedEquipoMedicos: EquiposMedicos={
    _id: '',
    nombre: '',
    fabricante: '',
    especialidad: '',
    caracteristicas: '',
    cantidad: 0,
    disponible:0,
    noDisponible:0
  };
  urlEndPoint: string = environment.endpoint.concat('/farmacia/equiposMedicos'); //'http://localhost:3000/productos'
  EquipoMedicoCambio = new Subject<any>();
  mensajeCambio = new Subject<string>();
  equiposMedicos: EquiposMedicos[]; //importamos desde el modelo tene objetos tipo Categoria
  readonly URL_API= "http://localhost:3000/farmacia/equiposMedicos/";
  constructor(private http: HttpClient){}


    getEquiposMedicos(){
        return this.http.get<any>(this.URL_API);
    }  
    createEquipoMedico(equiposM:EquiposMedicos){
        return this.http.post(this.URL_API,equiposM);
    }
    updateEquipoMedico(id:string, query:any) {
      return this.http.put<any>(`${this.urlEndPoint}/${id}`, query);
    }
    listarEquipoMedicoId(id:string){  
     
      return this.http.get<any>(`${this.urlEndPoint}/${id}`);
    }
}
