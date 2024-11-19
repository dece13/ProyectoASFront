import { TestBed } from '@angular/core/testing';

import { DinamicaService } from './Servicio-Dinamica';

describe('ActivadServicio', () => {
  let service: DinamicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DinamicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});