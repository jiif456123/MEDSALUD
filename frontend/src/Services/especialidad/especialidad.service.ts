import { Injectable } from '@angular/core';
import { environment } from '../../../src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Especialidad } from '../../models/especialidad.model';


@Injectable({
    providedIn: 'root'
  })
  export class EspecialidadService {
    selectedEspecialidad : Especialidad;
    especialidad: Especialidad[];

  url_API: string = environment.endpoint.concat('/citas/gestionar-especialidad');
  especialidadCambio = new Subject<any>();
  mensajeCambio = new Subject<string>();
  constructor(private http: HttpClient){ }

  listar() {
    return this.http.get<any>(`${this.url_API}`);
  };
  registrar(query: any){
    return this.http.post<any>(this.url_API, query);
  }
  actualizar(id: string, query: any){
    return this.http.put<any>(`${this.url_API}/${id}`,query)
  }
  getEspecialidad(){
    return this.http.get<Especialidad[]>(this.url_API);
  }

  registrarEspecialidad(especialidad: any){
    return this.http.post<Especialidad[]>(this.url_API, especialidad);
  }

  actualizarEspecialidad(Especialidad: Especialidad) {
    return this.http.put(this.url_API + `/${Especialidad._id}`, Especialidad);
  }
  listarEspacialidadId(id: string){
    return this.http.get<any>(`${this.url_API}/${id}`);
  }
  eliminar(_id: string) {
    return this.http.delete<any>(`${this.url_API}/${_id}`);
  };
}
