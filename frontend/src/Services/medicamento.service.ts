import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Medicamento} from '../models/medicamento.model';
import 'rxjs/add/operator/map';

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
     detalles:'',
     clx:null,
     Fecha:null,
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
    detalles:'',
    clx:null,
    Fecha:null,
 };
 selectedMedicamento3: Medicamento={
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
  detalles:'',
  clx:null,
  Fecha:null,
};
 

  medicamento: Medicamento[]; //importamos desde el modelo tene objetos tipo medicamento
  readonly URL_API= "http://localhost:3000/farmacia/medicamento/";
  constructor(private http: HttpClient){}


    getMedicamento(){
      return this.http.get<any>(this.URL_API);
    }
    getMedicamento2(){
      return this.http.get<any>(this.URL_API).map(res => res.data);
    }
    getMedicamento3(categoria: string){
      return this.http.get<any>(this.URL_API+'/getEgIn'+ `/${categoria}`);
    }

    createMedicamento(Medicamento:Medicamento){
      return this.http.post(this.URL_API,Medicamento);
   }
    updateMedicamento(Medicamento:Medicamento){
      return this.http.put(this.URL_API + `/${Medicamento._id}`, Medicamento);
    }  

    getByNombre(nombre: string) {
      if(nombre!=''){
        return this.http.get<any>(this.URL_API + `busqueda/${nombre}`);
      }else{
        return this.http.get<any>(this.URL_API);
      }
   
    }
    listar() {
      return this.http.get<any>(this.URL_API);
    }

    insertar(obj) {
      return this.http.post<any>(this.URL_API, obj);
    }
    
}

/*
    deleteMedicamento(_id: string) {
      return this.http.delete(this.URL_API + /${_id});
    }*/
