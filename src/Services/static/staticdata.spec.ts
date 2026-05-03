import { TestBed } from '@angular/core/testing';

import { Staticdata } from './staticdata';

describe('Staticdata', () => {
  let service: Staticdata;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Staticdata);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
