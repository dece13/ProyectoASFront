import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioPantallaSuperusuarioComponent } from './pantalla-inicio-superusuario.component';

describe('PantallaInicioSuperusuarioComponent', () => {
  let component: InicioPantallaSuperusuarioComponent;
  let fixture: ComponentFixture<InicioPantallaSuperusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioPantallaSuperusuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InicioPantallaSuperusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});