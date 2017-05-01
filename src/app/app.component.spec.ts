import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {PcfFormComponent} from "./pcf-form/pcf-form.component";
import {FileSelectDirective} from "ng2-file-upload";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {PcfService} from "./pcf.service";
import {HttpModule} from "@angular/http";


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PcfFormComponent,
        FileSelectDirective
      ],
      providers:[
        PcfService,
        {provide: 'url', useValue: 'http://www.intelligentvisibility.com/pcfui/pcf2vpnc.php'}
      ],
      imports:[
        NgbModule.forRoot(),
        HttpModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'PCF file decoder'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('PCF file decoder');
  }));

  xit('should contain the app-pcf-form', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').textContent).toContain('<app-pcf-form></app-pcf-form>');
  }));
});
