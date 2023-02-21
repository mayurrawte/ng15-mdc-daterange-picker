import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMdcDaterangePickerComponent } from './ngx-mdc-daterange-picker.component';

describe('NgxMdcDaterangepickerComponent', () => {
  let component: NgxMdcDaterangePickerComponent;
  let fixture: ComponentFixture<NgxMdcDaterangePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMdcDaterangePickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxMdcDaterangePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
