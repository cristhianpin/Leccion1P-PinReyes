import { FormGroup } from "@angular/forms";

export class Programador {
    id: number;
    cedula: string;
    nombre: string;
    apellido: string;  
    correo: string;
    fecha_nacimiento: Date;
    estado: boolean;


    constructor(id: number ,cedula: string, nombre: string, apellido: string,  correo: string, fecha_nacimiento: Date, estado: boolean) {
        this.id = id;
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.fecha_nacimiento = fecha_nacimiento;
        this.estado = false;

    }
}