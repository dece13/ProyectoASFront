import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pantalla-reservar-evento',
  templateUrl: './pantalla-reservar-evento.component.html',
  styleUrls: ['./pantalla-reservar-evento.component.css']
})
export class ReservaPantallaEventoComponent {
  eventoId: number | null = null;
  evento: { nombre: string; descripcion: string; ubicacion: string; capacidad: number } | null = null;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.eventoId = +params['id']; // Obtener el ID del evento de la URL
      this.cargarEvento();
    });
  }

  cargarEvento(): void {
    // Simular datos del evento, reemplaza esto con una llamada al backend si es necesario
    this.evento = {
      nombre: 'Evento de Prueba',
      descripcion: 'Este es un evento de prueba.',
      ubicacion: 'Ciudad de Ejemplo',
      capacidad: 50
    };
  }

  reservarEvento(): void {
    // Datos enviados al backend
    const reservaData = {
      Amount: 100.00, // Monto quemado
      Description: `Reserva para el evento: ${this.evento?.nombre}`
    };

    // Realizar la solicitud POST al backend
    this.http.post<any>('https://localhost:7253/api/PayPal/create-payment', reservaData)
      .subscribe(response => {
        const approvalUrl = response?.approval_url; // Obtener el enlace de aprobación
        if (approvalUrl) {
          window.location.href = approvalUrl; // Redirigir al usuario al enlace de PayPal
        } else {
          console.error('No se encontró el enlace de aprobación en la respuesta.');
        }
      }, error => {
        console.error('Error al comunicarse con el API de PayPal:', error);
      });
  }
}
