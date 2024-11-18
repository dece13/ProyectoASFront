import { Component } from '@angular/core';
import { EspaciosService } from '../../servicios/espacios.service';

@Component({
  selector: 'app-listar-espacios',
  templateUrl: './listar-espacios.component.html',
  styleUrls: ['./listar-espacios.component.css'],
})
export class ListarEspaciosComponent {
  mensaje: string = "hola";
  constructor(private espaciosService: EspaciosService) {}

  eliminarEspacio(id: number){
    this.espaciosService.borrarEspacio(id).subscribe({next:(mensaje)=>{
      console.log(mensaje);
    }, error: (e)=>{
      console.log(e);
    }})
  }

  convertirANumero(valor: string): number {
    return Number(valor);
  }
}
