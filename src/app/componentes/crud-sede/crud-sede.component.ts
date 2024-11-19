import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Evento } from '../../model/Actividad';
import { EventoService } from '../../servicios/serevento.service';
@Component({
  selector: 'app-crud-sede',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, RouterModule],
  templateUrl: './crud-sede.component.html',
  styleUrl: './crud-sede.component.css'
})
export class SedeCrudComponent {

  actividades: Evento[] = [];
  actividad: Evento = new Evento(0,'','', 0, '', ''); // Inicializar con valores por defecto
  actividadId: number | null = null; // Campo para ID ingresado por el usuario

  constructor(private EventoService: EventoService) {}

  ngOnInit(): void {
    this.listarEvento();
  }

  // Método para listar todas las actividades
  listarEvento(): void {
    this.EventoService.getEventosExterno().then((data) => {
      this.actividades = data;
    }).catch(error => console.error('Error al listar actividades:', error));
  }

  // Método para agregar una actividad
  agregarActividad(): void {
    this.EventoService.agregarEvento(this.actividad).then((nuevaActividad) => {
      console.log('Actividad agregada:', nuevaActividad);
      this.listarEvento(); // Actualiza la lista
      this.limpiarFormulario();
    }).catch(error => console.error('Error al agregar actividad:', error));
  }

  // Método para obtener una actividad por ID
  obtenerActividadPorId(): void {
    if (this.actividadId) {
      this.EventoService.obtenerEventooPorId(this.actividadId).then((data) => {
        this.actividad = data;
      }).catch(error => console.error('Error al obtener actividad:', error));
    } else {
      alert("Por favor, ingresa un ID válido.");
    }
  }

  // Método para actualizar una actividad
  actualizarActividad(): void {
    this.EventoService.actualizarUsuario(this.actividad).then((actividadActualizada) => {
      console.log('Actividad actualizada:', actividadActualizada);
      this.listarEvento(); // Actualiza la lista
      this.limpiarFormulario();
    }).catch(error => console.error('Error al actualizar actividad:', error));
  }

  // Método para borrar una actividad por ID
  borrarActividad(): void {
    if (this.actividadId) {
      this.EventoService.borrarEvento(this.actividadId).then(() => {
        console.log('Actividad borrada con éxito');
        this.listarEvento(); // Actualiza la lista
        this.actividadId = null; // Limpia el campo de ID
      }).catch(error => console.error('Error al borrar actividad:', error));
    } else {
      alert("Por favor, ingresa un ID válido.");
    }
  }

  // Limpiar el formulario de actividad
  limpiarFormulario(): void {
    this.actividad = new Evento(0,'','', 0, '', '');
    this.actividadId = null;
  }



}