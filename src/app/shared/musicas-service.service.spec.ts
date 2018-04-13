import { TestBed, inject } from '@angular/core/testing';

import { MusicasServiceService } from './musicas-service.service';

describe('MusicasServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusicasServiceService]
    });
  });

  it('should be created', inject([MusicasServiceService], (service: MusicasServiceService) => {
    expect(service).toBeTruthy();
  }));
});
