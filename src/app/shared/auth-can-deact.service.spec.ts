import { TestBed, inject } from '@angular/core/testing';

import { AuthCanDeactService } from './auth-can-deact.service';

describe('AuthCanDeactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthCanDeactService]
    });
  });

  it('should be created', inject([AuthCanDeactService], (service: AuthCanDeactService) => {
    expect(service).toBeTruthy();
  }));
});
