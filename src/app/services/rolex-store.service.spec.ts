import { TestBed } from '@angular/core/testing';

import { RolexStoreService } from './rolex-store.service';

describe('RolexStoreService', () => {
  let service: RolexStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolexStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
