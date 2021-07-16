import { EquiposMedicos } from './equiposMedicos.model';
export class EjemplarEquipoMedico{
    
    _id:string;
    idEquipoMedico: EquiposMedicos;
    ubicacion: string;
    estado :string;
    solicitante: string;
    fechaEntrega: Date;
    fechaDevolucion: Date;
}