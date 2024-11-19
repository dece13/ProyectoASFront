import { Injectable } from '@angular/core';
import { Dinamica } from '../model/Dinamica';

import { Observable, of } from 'rxjs';

import axios from 'axios';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DinamicaService {

  private apiUrl = 'http://localhost:8080/GestionarActividad/api/actividad'; // URL del usuario api rest

  constructor() { }
  async obtenerActividadPorId(id: number): Promise<Dinamica> {
    try {
      const response = await axios.get<Dinamica>(`${this.apiUrl}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener usuario por ID:', error);
      throw error;
    }
  }
  // Método para enviar los datos del arrendador al backend
  agregarActividad(usuario: Dinamica): Promise<Dinamica> {
    // Obtener el token CSRF del almacenamiento local o de otra fuente
    const csrfToken = localStorage.getItem('XSRF-TOKEN');
  
    // Devolver una nueva promesa
    return new Promise((resolve, reject) => {
      // Incluir el token CSRF en la solicitud
      axios.post<Dinamica>(
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

  getActividadExterno(): Promise< Dinamica[] > {
    return axios.get< Dinamica[] >('http://localhost:8080/GestionarActividad/api/actividad').then(response => response.data); // usuario externo cambiar
  }

  async actualizarActividad(usuario: Dinamica): Promise<Dinamica> {
    try {
      const response = await axios.put<Dinamica>(`${this.apiUrl}/${usuario.id}`, usuario);
      return response.data;
    } catch (error) {
      console.error('Error al actualizar arrendador:', error);
      throw error;
    }
  }

  async borrarActividad(id: number): Promise<void> {
    try {
      await axios.delete(`${this.apiUrl}/${id}`);
    } catch (error) {
      console.error('Error al borrar arrendador:', error);
      throw error;
    }
  }
}