import { Injectable } from '@angular/core';
import { Reserva } from '../model/Reserva';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ReservaService {
  private apiUrl = 'http://localhost:8080/GestionarReservas/api/reservas'; // URL del usuario api rest

  constructor() { }
  async obtenerEventooPorId(id: number): Promise<Reserva> {
    try {
      const response = await axios.get<Reserva>(`${this.apiUrl}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener usuario por ID:', error);
      throw error;
    }
  }
  // Método para enviar los datos del arrendador al backend
  agregarEvento(usuario: Reserva): Promise<Reserva> {
    // Obtener el token CSRF del almacenamiento local o de otra fuente
    const csrfToken = localStorage.getItem('XSRF-TOKEN');
  
    // Devolver una nueva promesa
    return new Promise((resolve, reject) => {
      // Incluir el token CSRF en la solicitud
      axios.post<Reserva>(
        this.apiUrl,
        usuario,
        { headers: { 'X-XSRF-TOKEN': csrfToken } }
      )
      .then(response => {
        // Si la solicitud se completó correctamente, resolver la promesa con los datos de respuesta
        resolve(response.data);
      })
      .catch(error => {
        // Si se produce un error, rechazar la promesa y pasar el error al manejador de errores
        console.error('Error al agregar arrendador:', error);
        reject(error);
      });
    });
  }
  

  // Método para obtener el token CSRF de la cookie
  private getCSRFTokenFromCookie(): string {
    const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith('XSRF-TOKEN'))
      ?.split('=')[1];
    return cookieValue ? cookieValue : '';
  } 
  /*
  getArrendadorInterno(): Observable< usuarioArrendador[] > {
    return of([
      new usuarioArrendador(1, "Palblo", "Márquez",20, "palomar@gmail.com",3123123,0),
      new usuarioArrendador(2, "Malría", "Pacheco",20, "marrpache@gmail.com",3424242,0),
      new usuarioArrendador(3, "Frañncisco", "Márquez",20, "franmark@gmail.com",434244,0),
      new usuarioArrendador(4, "Milguel", "Márquez",20, "miguer@gmail.com",31241241,0),
    ]);
  }*/

  getEventosExterno(): Promise< Reserva[] > {
    return axios.get< Reserva[] >('http://localhost:8080/GestionarReservas/api/reservas').then(response => response.data); // usuario externo cambiar id
  }

  async actualizarUsuario(usuario: Reserva): Promise<Reserva> {
    try {
      const response = await axios.put<Reserva>(`${this.apiUrl}/${usuario.id}`, usuario);
      return response.data;
    } catch (error) {
      console.error('Error al actualizar arrendador:', error);
      throw error;
    }
  }

  async borrarEvento(id: number): Promise<void> {
    try {
      await axios.delete(`${this.apiUrl}/${id}`);
    } catch (error) {
      console.error('Error al borrar arrendador:', error);
      throw error;
    }
  }

  
  async obtenerEventoPorId(id: number): Promise<Reserva> {
    try {
      const response = await axios.get<Reserva>(`${this.apiUrl}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener usuario por ID:', error);
      throw error;
    }
  }
}
