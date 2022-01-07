import { TestBed } from '@angular/core/testing';

import { InspectionRequestService } from './inspection-request.service';

describe('InspectionRequestService', () => {
  let service: InspectionRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InspectionRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
