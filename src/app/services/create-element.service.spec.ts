import { TestBed } from '@angular/core/testing';

import { CreateElementService } from './create-element.service';

describe('CreateElementService', () => {
  let service: CreateElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
