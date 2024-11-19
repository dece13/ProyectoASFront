import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PantallaBuscarEventoComponent } from './pantalla-Buscar-evento.component';
import { EventoService } from '../../servicios/serevento.service';
import { of, throwError } from 'rxjs';
import { FormsModule } from '@angular/forms'; // Para ngModel
import axios from 'axios';

describe('PantallaBuscarEventoComponent', () => {
    let component: PantallaBuscarEventoComponent;
    let fixture: ComponentFixture<PantallaBuscarEventoComponent>;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [PantallaBuscarEventoComponent]
      })
      .compileComponents();
      
      fixture = TestBed.createComponent(PantallaBuscarEventoComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
        expect(component).toBeTruthy();
      });
    });