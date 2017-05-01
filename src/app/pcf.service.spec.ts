import { TestBed, inject } from '@angular/core/testing';

import { PcfService } from './pcf.service';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpModule} from "@angular/http";

describe('PcfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PcfService,
        {provide: 'url', useValue: 'http://www.intelligentvisibility.com/pcfui/pcf2vpnc.php'}
      ],
      imports:[
      NgbModule.forRoot(),
      HttpModule
    ]
    });
  });

  it('should ...', inject([PcfService], (service: PcfService) => {
    expect(service).toBeTruthy();
  }));
});
