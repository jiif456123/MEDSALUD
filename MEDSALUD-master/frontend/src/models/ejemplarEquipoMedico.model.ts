import { EquiposMedicos } from './equiposMedicos.model';
export class EjemplarEquipoMedico{
    idEquipoMedico: EquiposMedicos = {
        _id: '',
        nombre: '',
        fabricante:'',
        especialidad:'',
        caracteristicas:'',
        cantidad: 0,
        disponible:0,
        noDisponible:0
    };
    _id:string;
    ubicacion: string;
    estado :string;
    solicitante: string;
    fechaEntrega: string;
    fechaDevolucion: string;
}