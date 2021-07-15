import { Paciente } from "./paciente.model";
export class Historia {
    _id: string
    medico: string
    especialidad: string
    fecha: Date
    peso: number
    altura: number
    tension: number
    alergias: string
    antecedentes: string
    historia: string
    diagnostico: string
    paciente: Paciente
}