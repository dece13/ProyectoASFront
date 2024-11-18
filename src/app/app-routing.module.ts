import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarEspaciosComponent } from './componentes/listar-espacios/listar-espacios.component';

const routes: Routes = [
  { path: '', component: ListarEspaciosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
