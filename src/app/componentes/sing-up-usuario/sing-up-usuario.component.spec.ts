import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingUpUsuarioComponent } from './sing-up-usuario.component';

describe('SingUpUsuarioComponent', () => {
  let component: SingUpUsuarioComponent;
  let fixture: ComponentFixture<SingUpUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingUpUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingUpUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});