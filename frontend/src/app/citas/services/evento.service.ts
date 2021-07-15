import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  urlEndPoint: string = environment.endpoint.concat('/citas/evento');

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any>(this.urlEndPoint);
  }

  registrar(query: any) {
    return this.http.post<any>(this.urlEndPoint, query);
  }

  eliminar(_id: string) {
    return this.http.delete<any>(`${this.urlEndPoint}/${_id}`);
  }
}