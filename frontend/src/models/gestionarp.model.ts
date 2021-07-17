  
export class Gestionarp{
    _id?: string;
    nombre:  string ;
    contacto : string;
    email:string;
    estado: string;
    telefono:string;
    laboratorio:string;
}

export class Estado{
    estado:string;
}

export class Laboratorio{
    nombreLab : string;
}
export class ProveedorLab{
    _id?: string;
    nombre:  string ;
    contacto : string;
    email:string;
    estado: string;
    telefono:number;
    laboratorio:string;
}