import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://tu-api.com/api/auth'; // URL de tu API de autenticación

  constructor(private http: HttpClient, private router: Router) {}

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
  
  logind(email: string, password: string): Observable<boolean> {
    // Enviamos las credenciales al backend
    return this.http.post<{ userId: number; cuenta: string }>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        tap(response => {
          // Guardamos la información de autenticación en localStorage si la autenticación fue exitosa
          if (response.userId){ //&& response.cuenta) {
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('userId', response.userId.toString());
            //localStorage.setItem('cuenta', response.cuenta);

            this.router.navigate(['UsuarioArrendador/Inicio', response.userId]);

            // Redirigir al usuario según el tipo de cuenta
            //if (response.cuenta === '1') {
              //this.router.navigate(['UsuarioArrendatario/Inicio', response.userId]);
            //} else {
              //this.router.navigate(['UsuarioArrendador/Inicio', response.userId]);
            //}
          }
        }),
        map(response => !!response.userId), // Retorna true si el usuario fue autenticado
        catchError(() => of(false)) // Manejo de error: Retorna false si falla la autenticación
      );
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
