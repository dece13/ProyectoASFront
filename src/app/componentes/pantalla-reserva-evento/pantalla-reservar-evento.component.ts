import { Component } from '@angular/core';
import { Evento } from '../../model/Actividad';
import { EventoService } from '../../servicios/serevento.service';
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
  eventoId: number | null = null;
  evento: Evento | null = null;

  constructor(private route: ActivatedRoute, private eventoService: EventoService,private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.eventoId = +params['id']; // Obtener el ID del usuario de la URL
      this.cargarEvento();
    });
  }

  cargarEvento(): void {
    if (this.eventoId) {
      this.eventoService.obtenerEventoPorId(this.eventoId)
        .then(evento => {
          this.evento = evento;
        })
        .catch(evento => {
          console.error('Error al cargar información del usuario:', Error);
        });
    }
    
  }

  
}