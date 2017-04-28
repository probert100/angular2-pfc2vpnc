import { TestBed, inject } from '@angular/core/testing';

import { PcfService } from './pcf.service';

describe('PcfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PcfService]
    });
  });

  it('should ...', inject([PcfService], (service: PcfService) => {
    expect(service).toBeTruthy();
  }));
});
