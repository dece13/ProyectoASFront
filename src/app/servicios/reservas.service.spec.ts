import { TestBed } from '@angular/core/testing';

import { ReservaService } from './reservas.service';

describe('SedeServiceService', () => {
  let service: ReservaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
