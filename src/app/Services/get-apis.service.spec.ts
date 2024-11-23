import { TestBed } from '@angular/core/testing';

import { GetAPIsService } from './get-apis.service';

describe('GetAPIsService', () => {
  let service: GetAPIsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAPIsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
