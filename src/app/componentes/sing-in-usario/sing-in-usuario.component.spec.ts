import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingInUsuarioComponent } from './sing-in-usuario.component';

describe('SingInUsuarioComponent', () => {
  let component: SingInUsuarioComponent;
  let fixture: ComponentFixture<SingInUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingInUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingInUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});