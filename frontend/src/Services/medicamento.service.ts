import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Medicamento} from '../models/medicamento.model';

@Injectable()

export class MedicamentoService{

  selectedMedicamento: Medicamento={
     _id:'',
     codigo:'',
     nombre: '',
     disponibilidad:null,
     dosis:'',
     presentacion:'',
     precioUnitario:null,
     marca:'',
     categoria:'',
     ubicacion:'',
     stockMin:null,
     stockMax:null,
     stockActual:null,
     detalles:''
  };
  selectedMedicamento1: Medicamento={
    _id:'',
    codigo:'',
    nombre: '',
    disponibilidad:null,
    dosis:'',
    presentacion:'',
    precioUnitario:null,
    marca:'',
    categoria:'',
    ubicacion:'',
    stockMin:null,
    stockMax:null,
    stockActual:null,
    detalles:''
 };
 

  medicamento: Medicamento[]; //importamos desde el modelo tene objetos tipo medicamento
  readonly URL_API= "http://localhost:3000/farmacia/medicamento/";
  constructor(private http: HttpClient){}


    getMedicamento(){
      return this.http.get<any>(this.URL_API);
    }

    createMedicamento(Medicamento:Medicamento){
      return this.http.post(this.URL_API,Medicamento);
   }
    updateMedicamento(Medicamento:Medicamento){
      return this.http.put(this.URL_API + `/${Medicamento._id}`, Medicamento);
    }  
}

/*
    deleteMedicamento(_id: string) {
      return this.http.delete(this.URL_API + /${_id});
    }*/
