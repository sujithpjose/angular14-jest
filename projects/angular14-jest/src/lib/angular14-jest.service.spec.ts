import { TestBed } from '@angular/core/testing';

import { Angular14JestService } from './angular14-jest.service';

describe('Angular14JestService', () => {
  let service: Angular14JestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Angular14JestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
