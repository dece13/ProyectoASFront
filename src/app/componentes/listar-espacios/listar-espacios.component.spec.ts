import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEspaciosComponent } from './listar-espacios.component';

describe('ListarEspaciosComponent', () => {
  let component: ListarEspaciosComponent;
  let fixture: ComponentFixture<ListarEspaciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarEspaciosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarEspaciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
