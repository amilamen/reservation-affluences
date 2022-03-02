import { TestBed } from '@angular/core/testing';

import { BookingCheckingService } from './booking-checking.service';

describe('BookingService', () => {
  let service: BookingCheckingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingCheckingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
