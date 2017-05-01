import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcfFormComponent } from './pcf-form.component';
import {FileSelectDirective} from "ng2-file-upload";
import {HttpModule} from "@angular/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {PcfService} from "../pcf.service";

describe('PcfFormComponent', () => {
  let component: PcfFormComponent;
  let fixture: ComponentFixture<PcfFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcfFormComponent ,
        FileSelectDirective],
      imports: [
        NgbModule.forRoot(),
        HttpModule
      ],
      providers:[
        PcfService,
        {provide: 'url', useValue: 'http://www.intelligentvisibility.com/pcfui/pcf2vpnc.php'}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
