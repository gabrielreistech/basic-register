import { TestBed } from '@angular/core/testing';

import { ListService } from './user-service.service';

describe('ListServiceService', () => {
  let service: ListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
