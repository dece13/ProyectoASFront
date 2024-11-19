import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarSedesComponent } from './componentes/listar-sedes/listar-sedes.component';
import { HomeComponent } from './componentes/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarSedesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeComponent,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
