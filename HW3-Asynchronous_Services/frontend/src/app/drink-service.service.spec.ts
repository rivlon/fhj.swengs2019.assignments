import { TestBed } from '@angular/core/testing';

import { DrinkService } from './drink-service.service';

describe('DrinkServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrinkService = TestBed.get(DrinkService);
    expect(service).toBeTruthy();
  });
});
