import { Component } from '@angular/core';
import { Reserva } from '../../model/Reserva';
import { ReservaService } from '../../servicios/reservas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-pantalla-reservar-evento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pantalla-reservar-evento.component.html',
  styleUrl: './pantalla-reservar-evento.component.css'
})
export class ReservaPantallaEventoComponent {
  reservas: Reserva[] = [];
  reserva: Reserva = new Reserva(0, '', '', false, 0);
  reservaId: number | null = null;

  constructor(private reservaService: ReservaService) {}

  ngOnInit(): void {
    this.listarReservas();
  }

  listarReservas(): void {
    this.reservaService.getEventosExterno().then((data) => {
      this.reservas = data;
    }).catch(error => console.error('Error al listar reservas:', error));
  }

  agregarReserva(): void {
    this.reservaService.agregarEvento(this.reserva).then((nuevaReserva) => {
      console.log('Reserva agregada:', nuevaReserva);
      this.listarReservas();
      this.limpiarFormulario();
    }).catch(error => console.error('Error al agregar reserva:', error));
  }

  obtenerReservaPorId(): void {
    if (this.reservaId) {
      this.reservaService.obtenerEventoPorId(this.reservaId).then((data) => {
        this.reserva = data;
      }).catch(error => console.error('Error al obtener reserva:', error));
    } else {
      alert("Por favor, ingresa un ID válido.");
    }
  }

  actualizarReserva(): void {
    this.reservaService.actualizarUsuario(this.reserva).then((reservaActualizada) => {
      console.log('Reserva actualizada:', reservaActualizada);
      this.listarReservas();
      this.limpiarFormulario();
    }).catch(error => console.error('Error al actualizar reserva:', error));
  }

  borrarReserva(): void {
    if (this.reservaId) {
      this.reservaService.borrarEvento(this.reservaId).then(() => {
        console.log('Reserva borrada con éxito');
        this.listarReservas();
        this.reservaId = null;
      }).catch(error => console.error('Error al borrar reserva:', error));
    } else {
      alert("Por favor, ingresa un ID válido.");
    }
  }

  limpiarFormulario(): void {
    this.reserva = new Reserva(0, '', '', false, 0);
    this.reservaId = null;
  }
  
}