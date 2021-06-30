  
export class Medicamento{

  constructor(){

  }
  public _id:String;
  public codigo:String;
  public nombre: String;
  public disponibilidad: Boolean;
  public dosis: String;
  public presentacion:String;
  public precioUnitario: Number;
  public marca:  String;
  public categoria: String;
  public ubicacion: String;
  public stockMin: Number;
  public stockMax: Number;
  public detalles: String
}

  export class MedicamentoN{

   
    _id?:String;
    codigo:String;
     nombre: String;
    disponibilidad: Boolean;
    dosis: String;
    presentacion:String;
    precioUnitario: Number;
    marca:  String;
    categoria: String;
    ubicacion: String;
    stockMin: Number;
    stockMax: Number;
    stockActual: Number;
    detalles: String
  }