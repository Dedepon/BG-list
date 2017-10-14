import { TestBed, inject } from '@angular/core/testing';

import { BgService } from './bg.service';

describe('BgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BgService]
    });
  });

  it('should be created', inject([BgService], (service: BgService) => {
    expect(service).toBeTruthy();
  }));
});
