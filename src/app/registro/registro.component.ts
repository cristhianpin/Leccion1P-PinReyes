import { Component } from '@angular/core';
import { Programador } from 'src/app/models/Programador';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  id = 0;
  cedula = "";
  nombre = "";
  apellido = "";
  correo ="";
  fecha_Nacimiento: Date | undefined;
  estado = false;
  listPersona: Programador[] = [];
  listPersonaEli: Programador[] = [];

  agregarPersona(): void {
    if (this.fecha_Nacimiento === undefined) {
      // No se proporcionó una fecha de nacimiento válida
      return;
    }

    const programador: Programador = {
      id: this.id,
      cedula: this.cedula,
      nombre: this.nombre,
      apellido: this.apellido,
      correo: this.correo,
      estado: this.estado,
      fecha_nacimiento: new Date(this.fecha_Nacimiento)
    };

    this.listPersona.push(programador);



    // Resto del código para procesar la lista de personas
  }



  eliminarPersona(id:number): void{
    this.listPersona.splice(id,1);
    //const personaEliminada = this.Programador.find(Programador => Programador.id === id);

    
    

  }


}
