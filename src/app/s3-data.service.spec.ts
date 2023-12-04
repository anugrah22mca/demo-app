import { TestBed } from '@angular/core/testing';

import { S3DataService } from './s3-data.service';

describe('S3DataService', () => {
  let service: S3DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(S3DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
