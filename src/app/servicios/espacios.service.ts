import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EspaciosService {
  private apiUrl = 'http://localhost:8080/RestJR/services/Espacios';

  constructor(private http: HttpClient) {}

  borrarEspacio(id: number){
    return this.http.delete<any>(`${this.apiUrl}/eliminarID/${id}`);
  }
  
}
