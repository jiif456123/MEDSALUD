export class MedicamentoOC{ //para describir que va a tener la Categoria el arreglo
    _id?:string;
    codigo: string;
    laboratorio:   string;
    categoria:   string;
    medicamento:   string;
    cantidad:   number;
    precio: number;
    total:   number;
    unidad:   string;
    tipo: string;
    tipoUnidad: string;

} 
export class MedicamentoPS{

    precioUnitario: number;
    stockActual: number;
  }
