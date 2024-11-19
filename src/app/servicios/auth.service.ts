import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(email: string, password: string): boolean {
    // Aquí debes implementar la lógica de autenticación, por ejemplo, verificar las credenciales en el backend
    // Devuelve true si la autenticación es exitosa, de lo contrario, devuelve false

    let userId: number | null = null;
    let cuenta: string | null = null;

    if (email === 'daniel' && password === 'castellanos') {
      userId = 1; // ID del usuario autenticado
      cuenta = '1'; // Arrendatario
    } else if (email === 'soyel' && password === 'mejor') {
      userId = 2; // ID del usuario autenticado
      cuenta = '0'; // Arrendador
    } else if (email === 'pablooo' && password === 'cascas') {
      userId = 4; // ID del usuario autenticado
      cuenta = '1'; // Arrendatario
    }

    if (userId !== null && cuenta !== null) {
      // Guardar información de autenticación en localStorage
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('userId', userId.toString());
      localStorage.setItem('cuenta', cuenta);

      // Redirigir al usuario a la página correspondiente
      if (cuenta === '1') {
        this.router.navigate(['UsuarioArrendatario/Inicio', userId]);
      } else {
        this.router.navigate(['UsuarioArrendador/Inicio', userId]);
      }
      return true;
    } else {
      // Autenticación fallida
      return false;
    }
  }

  logout(): void {
    // Limpiar la información de autenticación en localStorage
    localStorage.setItem('loggedIn', 'false');
    localStorage.removeItem('userId');
    localStorage.removeItem('cuenta');

    // Redirigir al usuario a la página de inicio de sesión
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    // Verificar si el usuario está autenticado consultando localStorage
    return localStorage.getItem('loggedIn') === 'true';
  }
}