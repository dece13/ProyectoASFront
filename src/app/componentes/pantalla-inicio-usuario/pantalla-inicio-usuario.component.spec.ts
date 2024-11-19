import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioPantallaUsuarioComponent } from './pantalla-inicio-usuario.component';

describe('PantallaInicioUsuarioComponent', () => {
  let component: InicioPantallaUsuarioComponent;
  let fixture: ComponentFixture<InicioPantallaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioPantallaUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InicioPantallaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});