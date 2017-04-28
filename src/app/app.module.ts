import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PcfFormComponent } from './pcf-form/pcf-form.component';
import {PcfService} from "./pcf.service";
import {FileUploadModule} from "ng2-file-upload";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PcfFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FileUploadModule,
    NgbModule.forRoot()
  ],
  providers: [PcfService,
    {provide: 'url', useValue: 'http://www.intelligentvisibility.com/pcfui/pcf2vpnc.php'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
