import { Component } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
@Component({
  selector: 'app-sing-in-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sing-in-usuario.component.html',
  styleUrl: './sing-in-usuario.component.css'
})
export class SingInUsuarioComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  signin() {
    if (this.authService.login(this.email, this.password)) {
      // Si el inicio de sesión es exitoso, el AuthService redireccionará al usuario automáticamente
    } else {
      // Si el inicio de sesión falla, puedes manejarlo aquí (por ejemplo, mostrar un mensaje de error)
      console.log('Inicio de sesión fallido. Verifica tus credenciales.');
    }
  }
}