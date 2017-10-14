import { TestBed, inject } from '@angular/core/testing';

import { BgParserService } from './bg-parser.service';

describe('BgParserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BgParserService]
    });
  });

  it('should be created', inject([BgParserService], (service: BgParserService) => {
    expect(service).toBeTruthy();
  }));
});
