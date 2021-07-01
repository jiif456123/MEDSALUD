import { Medicamento } from "../models/medicamento.model";

export class Lote {

    constructor() {
    }
    public _id: string;
    public cxl: number;
    public Fecha: Date;
    public medicamento : Medicamento = new Medicamento()

}