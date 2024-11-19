import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinamicaCrudComponent } from './crud-Dinamica.component';

describe('DinamicaCrudComponent', () => {
  let component: DinamicaCrudComponent;
  let fixture: ComponentFixture<DinamicaCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DinamicaCrudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DinamicaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});