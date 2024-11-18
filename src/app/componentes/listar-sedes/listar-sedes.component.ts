import { Sede } from '../../model/sede';
import { SedeServiceService } from './../../servicios/sede-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-sedes',
  templateUrl: './listar-sedes.component.html',
  styleUrl: './listar-sedes.component.css'
})
export class ListarSedesComponent {

  sedes: Sede[] = []

  constructor(
    private SedeServiceService: SedeServiceService
  ){ }
    

  ngOnInit(): void {
    this.SedeServiceService.listarSedes().subscribe(Sedes => this.sedes = Sedes)
  }  

}
