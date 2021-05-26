import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Medicamento} from '../models/medicamento.model';

@Injectable()

export class MedicamentoService{

  selectedMedicamento: Medicamento={
     _id:'',
     codigo:'',
     nombre: '',
     disponibilidad:false,
     dosis:'',
     presentacion:'',
     precioUnitario:0.0,
     marca:'',
     categoria:'',
     ubicacion:'',
     stockMin:0,
     stockMax:0,
     stockActual:0,
     detalles:''
  };

  medicamento: Medicamento[]; //importamos desde el modelo tene objetos tipo medicamento
  readonly URL_API= "http://localhost:3000/farmacia/medicamento/";
  constructor(private http: HttpClient){}


    getMedicamento(){

        return this.http.get<Medicamento[]>(this.URL_API);
    }

    createMedicamento(Medicamento:Medicamento){
  return this.http.post(this.URL_API,Medicamento);
  }
}

/*
    deleteMedicamento(_id: string) {
      return this.http.delete(this.URL_API + /${_id});
    }*/
