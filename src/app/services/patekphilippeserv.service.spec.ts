import { TestBed } from '@angular/core/testing';

import { PatekphilippeservService } from './patekphilippeserv.service';

describe('PatekphilippeservService', () => {
  let service: PatekphilippeservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatekphilippeservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
