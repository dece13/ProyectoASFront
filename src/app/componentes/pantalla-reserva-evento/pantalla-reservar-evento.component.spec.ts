import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaPantallaEventoComponent } from './pantalla-reservar-evento.component';

describe('PantallaInicioUsuarioComponent', () => {
  let component: ReservaPantallaEventoComponent;
  let fixture: ComponentFixture<ReservaPantallaEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservaPantallaEventoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservaPantallaEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});