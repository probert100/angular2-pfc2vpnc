import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcfFormComponent } from './pcf-form.component';

describe('PcfFormComponent', () => {
  let component: PcfFormComponent;
  let fixture: ComponentFixture<PcfFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcfFormComponent ]
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
