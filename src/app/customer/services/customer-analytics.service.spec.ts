import { TestBed } from '@angular/core/testing';

import { CustomerAnalyticsService } from './customer-analytics.service';

describe('CustomerAnalyticsService', () => {
  let service: CustomerAnalyticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerAnalyticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
