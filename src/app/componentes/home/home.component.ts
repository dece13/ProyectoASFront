import { Component } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Correct the property name
})
export class HomeComponent {
  constructor(private authService: AuthService, private router: Router) { }

  // Función para cerrar sesión
  logout(): void {
    this.authService.logout();
    console.log(localStorage.getItem('loggedIn'));
  }

  irInicio(): void {
    const userId = localStorage.getItem('userId');
    if (localStorage.getItem('cuenta') === '1') { // Compare with string '1'
      this.router.navigate(['UsuarioArrendatario/Inicio', userId]);
      console.log(localStorage.getItem('cuenta'));
    } else {
      this.router.navigate(['UsuarioArrendador/Inicio', userId]);
      console.log(localStorage.getItem('cuenta'));
    }
  }

  // Función para verificar si el usuario está autenticado
  isLoggedIn(): boolean {
    console.log(localStorage.getItem('loggedIn'));
    return this.authService.isLoggedIn();
  }
}