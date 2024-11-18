import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sede } from '../model/sede';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SedeServiceService {

  private baseUrl = 'http://localhost:8080/GestionarSedes/api/sedes';

  constructor(
    private http: HttpClient,
  ) { }

  private headers = new HttpHeaders(
    { "Content-Type": "application/json" }
  )

  listarSedes(): Observable<Sede[]> {
    return this.http.get<Sede[]>(`${this.baseUrl}`, { headers: this.headers });
  }
  
}
