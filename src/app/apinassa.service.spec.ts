import { TestBed } from '@angular/core/testing';

import { ApinassaService } from './apinassa.service';

describe('ApinassaService', () => {
  let service: ApinassaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApinassaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
