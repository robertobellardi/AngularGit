import { TestBed } from '@angular/core/testing';

import { ConnessioneService } from './connessione.service';

describe('ConnessioneService', () => {
  let service: ConnessioneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnessioneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
