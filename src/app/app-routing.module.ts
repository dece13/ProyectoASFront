import { ListarSedesComponent } from './componentes/listar-sedes/listar-sedes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { SingInUsuarioComponent } from './componentes/sing-in-usario/sing-in-usuario.component';
import { SingUpUsuarioComponent } from './componentes/sing-up-usuario/sing-up-usuario.component';
import { InicioPantallaUsuarioComponent } from './componentes/pantalla-inicio-usuario/pantalla-inicio-usuario.component';
import { PantallaBuscarEventoComponent } from './componentes/Pantalla-Buscar-Evento/pantalla-Buscar-evento.component';
import { ReservaPantallaEventoComponent } from './componentes/pantalla-reserva-evento/pantalla-reservar-evento.component';
import { DinamicaCrudComponent } from './componentes/crud-Dinamica/crud-Dinamica.component';
import { SedeCrudComponent } from './componentes/crud-sede/crud-sede.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'singin', component: SingInUsuarioComponent},
  { path: 'singup', component: SingUpUsuarioComponent},
  {path: 'Usuario/Inicio/:id' , component: InicioPantallaUsuarioComponent},
  {path: 'BuscarEvento' , component: PantallaBuscarEventoComponent},
  {path: 'ReservarEvento/:id' , component: ReservaPantallaEventoComponent},
  {path: 'crudActividad' , component: DinamicaCrudComponent},
  {path: 'crudSede' , component: SedeCrudComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
