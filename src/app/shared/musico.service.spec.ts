import { TestBed, inject } from '@angular/core/testing';

import { MusicoService } from './musico.service';

describe('MusicoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusicoService]
    });
  });

  it('should be created', inject([MusicoService], (service: MusicoService) => {
    expect(service).toBeTruthy();
  }));
});
