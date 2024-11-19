import { Component } from '@angular/core';
import { Usuario } from '../../model/Usuario';
import { UsuarioService } from '../../servicios/Usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-pantalla-inicio-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pantalla-inicio-usuario.component.html',
  styleUrl: './pantalla-inicio-usuario.component.css'
})
export class InicioPantallaUsuarioComponent {
  usuarioId: number | null = null;
  usuario: Usuario | null = null;

  constructor(private route: ActivatedRoute, private usuarioService: UsuarioService,private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.usuarioId = +params['id']; // Obtener el ID del usuario de la URL
      this.cargarUsuario();
    });
  }

  cargarUsuario(): void {
    if (this.usuarioId) {
      this.usuarioService.obtenerUsuarioPorId(this.usuarioId)
        .then(usuario => {
          this.usuario = usuario;
        })
        .catch(error => {
          console.error('Error al cargar información del usuario:', error);
        });
    }
    
  }

  logout(): void {
    this.authService.logout();
    console.log(localStorage.getItem('loggedIn'))
  }
}