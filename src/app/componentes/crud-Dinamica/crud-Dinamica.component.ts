import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Dinamica } from '../../model/Dinamica';
import { DinamicaService } from '../../servicios/Servicio-Dinamica';
@Component({
  selector: 'app-crud-Dinamicao',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, RouterModule],
  templateUrl: './crud-Dinamica.component.html',
  styleUrl: './crud-Dinamica.component.css'
})
export class DinamicaCrudComponent {

  actividades: Dinamica[] = [];
  actividad: Dinamica = new Dinamica(0,"", new Date(), 0.0, true); // Inicializar con valores por defecto
  actividadId: number | null = null; // Campo para ID ingresado por el usuario

  constructor(private dinamicaService: DinamicaService) {}

  ngOnInit(): void {
    this.listarActividades();
  }

  // Método para listar todas las actividades
  listarActividades(): void {
    this.dinamicaService.getActividadExterno().then((data) => {
      this.actividades = data;
    }).catch(error => console.error('Error al listar actividades:', error));
  }

  // Método para agregar una actividad
  agregarActividad(): void {
    this.dinamicaService.agregarActividad(this.actividad).then((nuevaActividad) => {
      console.log('Actividad agregada:', nuevaActividad);
      this.listarActividades(); // Actualiza la lista
      this.limpiarFormulario();
    }).catch(error => console.error('Error al agregar actividad:', error));
  }

  // Método para obtener una actividad por ID
  obtenerActividadPorId(): void {
    if (this.actividadId) {
      this.dinamicaService.obtenerActividadPorId(this.actividadId).then((data) => {
        this.actividad = data;
      }).catch(error => console.error('Error al obtener actividad:', error));
    } else {
      alert("Por favor, ingresa un ID válido.");
    }
  }

  // Método para actualizar una actividad
  actualizarActividad(): void {
    this.dinamicaService.actualizarActividad(this.actividad).then((actividadActualizada) => {
      console.log('Actividad actualizada:', actividadActualizada);
      this.listarActividades(); // Actualiza la lista
      this.limpiarFormulario();
    }).catch(error => console.error('Error al actualizar actividad:', error));
  }

  // Método para borrar una actividad por ID
  borrarActividad(): void {
    if (this.actividadId) {
      this.dinamicaService.borrarActividad(this.actividadId).then(() => {
        console.log('Actividad borrada con éxito');
        this.listarActividades(); // Actualiza la lista
        this.actividadId = null; // Limpia el campo de ID
      }).catch(error => console.error('Error al borrar actividad:', error));
    } else {
      alert("Por favor, ingresa un ID válido.");
    }
  }

  // Limpiar el formulario de actividad
  limpiarFormulario(): void {
    this.actividad = new Dinamica(0, "",new Date(), 0.0, true);
    this.actividadId = null;
  }



}