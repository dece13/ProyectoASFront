import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../servicios/serevento.service'; 
import { RouterModule, RouterOutlet } from '@angular/router';
import { Evento } from '../../model/Actividad';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pantalla-buscar-evento',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, RouterModule],
  templateUrl: './pantalla-buscar-evento.component.html',
  styleUrls: ['./pantalla-buscar-evento.component.css']
})
export class PantallaBuscarEventoComponent {
  // Definición de las propiedades que se utilizan en el template
  datosModelosService: Evento[] = [];
  searchQuery: string = '';  // Propiedad para la búsqueda
  selectedCategory: string = '';  // Propiedad para la categoría seleccionada
  eventos: Evento[] = [];  // Propiedad para los eventos

  constructor(private EventoService: EventoService) {}

  cargarEvento(): void {
    this.EventoService.getEventoExterno().then((usuarios) => {
      this.datosModelosService = usuarios;
      this.eventos = usuarios;  // Asignamos los eventos a la propiedad 'eventos'
    }).catch((error) => {
      console.error(error);
    });
  }

  // Método para manejar la búsqueda (opcional)
  buscarEventos(): void {
    // Aquí podrías filtrar los eventos basados en searchQuery y selectedCategory
    // Suponiendo que tienes una lógica que filtra eventos
    this.eventos = this.datosModelosService.filter((evento) => 
      evento.nombre.includes(this.searchQuery) && 
      (this.selectedCategory ? evento.categoria === this.selectedCategory : true)
    );
  }
}
