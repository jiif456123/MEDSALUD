import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { EjemplarEquipoMedico } from '../models/ejemplarEquipoMedico.model';
import { environment } from '../environments/environment';
import { Subject } from 'rxjs';
import { EquiposMedicos } from 'models/equiposMedicos.model';

@Injectable()

export class EjemplarEquipoMedicoService{
    selectedEjemplarEquipoMedico: EjemplarEquipoMedico = {     
        idEquipoMedico: {
            _id:'',
            nombre: '',
            fabricante:'',
            especialidad:'',
            caracteristicas:'',
            cantidad: 0,
            disponible:0,
            noDisponible:0
        },   
        _id: '',
        ubicacion:'',
        estado:'',
        solicitante:'',
        fechaEntrega: '',
        fechaDevolucion: ''      
    };
    urlEndPoint: string = environment.endpoint.concat('/farmacia/EjemplarEquiposMedicos'); //'http://localhost:3000/productos'
    ejemplarEquipoMedico: EjemplarEquipoMedico[]; 
    readonly URL_API= "http://localhost:3000/farmacia/EjemplarEquiposMedicos";
    constructor(private http: HttpClient){}

    createEjemplarEquipoMedico(ejemplarEM:EjemplarEquipoMedico){
        return this.http.post<any>(this.urlEndPoint,ejemplarEM);
    }

    updateEjemplarEquipoMedico(id:string, query:any){
        return this.http.put<any>(`${this.urlEndPoint}/${id}`, query);
    }
    
    getEjemplarEquipoMedicoId(id:string){
        return this.http.get<any>(`${this.urlEndPoint}/${id}`);
    }
    getMovimientoE(){
        return this.http.get<any>(this.urlEndPoint);
    }
    getfiltrar(Modo,Tipo,fechaInicial,fechaFinal){
        return this.http.get<any>(this.URL_API+'/Filtro'+ `/${Modo}`+`/${Tipo}`+`/${fechaInicial}`+`/${fechaFinal}`);
      }
}