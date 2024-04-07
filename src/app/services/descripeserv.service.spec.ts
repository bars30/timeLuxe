import { TestBed } from '@angular/core/testing';

import { DescripeservService } from './descripeserv.service';

describe('DescripeservService', () => {
  let service: DescripeservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescripeservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
