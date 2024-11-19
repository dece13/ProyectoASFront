import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedeCrudComponent } from './crud-sede.component';

describe('SedeCrudComponent', () => {
  let component: SedeCrudComponent;
  let fixture: ComponentFixture<SedeCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SedeCrudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SedeCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});