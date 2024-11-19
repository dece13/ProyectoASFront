import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Usuario } from '../../model/Usuario';
import { UsuarioService } from '../../servicios/Usuario.service';
@Component({
  selector: 'app-sing-up-usuario',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, RouterModule],
  templateUrl: './sing-up-usuario.component.html',
  styleUrl: './sing-up-usuario.component.css'
})
export class SingUpUsuarioComponent {

  nuevoUsuario: Usuario = new Usuario(
    0,                 // id
    '',                // nombre
    '',                // identificacion
    '',                // telefono
    '',                // correo
    '' ,                // contrasena
    false,             // afiliacion
    new Date(),        // fechaNacimiento
    '',                // direccion
    0                 // tipoCuenta
    
  ); // Nuevo usuario
  datosModelosService: Usuario[] = [];

  constructor(private UsuarioService: UsuarioService) { }

  cargarUsuario(): void {
    this.UsuarioService.getUsuarioExterno().then((usuarios) => {
      this.datosModelosService = usuarios;
    }).catch((error) => {
      console.error(error);
    });
  }

  // Método para agregar un nuevo usuario
  agregarUsuario(): void {
    this.UsuarioService.agregarUsuario(this.nuevoUsuario)
      .then(nuevoUsuario => {
        console.log('Usuario agregado:', nuevoUsuario);
        // Aquí puedes realizar cualquier lógica adicional después de agregar el usuario, como limpiar el formulario
        this.nuevoUsuario = new Usuario(
          0,                 // id
          '',                // nombre
          '',                // identificacion
          '',                // telefono
          '',                // correo
          '' ,                // contrasena
          false,             // afiliacion
          new Date(),        // fechaNacimiento
          '',                // direccion
          0                 // tipoCuenta
          
        ); // Nuevo usuario
        this.cargarUsuario();
      })
      .catch(error => {
        console.error('Error al agregar usuario:', error);
        // Maneja el error según sea necesario
      });
  }



}