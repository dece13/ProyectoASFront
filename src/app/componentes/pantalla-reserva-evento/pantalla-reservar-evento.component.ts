
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
    const reservaData = {
      amount: 100.0 // Valor quemado
    };

    this.http.get<any>('https://localhost:7253/api/PayPal/create-payment')
      .subscribe(response => {
        // Buscar el enlace de aprobación en la respuesta
        const approvalUrl = response?.links?.find((link: any) => link.rel === 'approval_url')?.href;
        if (approvalUrl) {
          // Redirigir al usuario al enlace de aprobación de PayPal
          window.location.href = approvalUrl;
        } else {
          console.error('No se encontró el enlace de aprobación en la respuesta.');
        }
      }, error => {
        console.error('Error al comunicarse con el API de PayPal:', error);
      });
  }
}