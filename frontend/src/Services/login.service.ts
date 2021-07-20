import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model'

@Injectable()

export class LoginService {


    usuario: User = {
        nombre: null,
        rol: null,
        apellidoPaterno: null,
        apellidoMaterno: null,
        dni: null,
        celular: null,
        email: null,
        fechaNacimiento: null,
        direccion: null,
        especialidad: null,
        contra: null,
        user: null,
    }

    logueado = false ;

    readonly URL_API = "http://localhost:3000/login";
    constructor(private http: HttpClient) { }


    loginUsuario(user: string, contra: string) {

        let json = {
            user: user,
            contra: contra
        };
        let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        let respuesta = this.http.post(this.URL_API, json, { headers: headers })
        respuesta.subscribe((res:any)=>{
            if(res.ingreso = true){
                this.logueado = true;
            }
            else{ 
                this.logueado = false;
            }
        })
        return respuesta
    }

    // estaLogueado(){
    //     alert('esta logueado')
    //     return this.estaLogueado;
    // }


   
}

