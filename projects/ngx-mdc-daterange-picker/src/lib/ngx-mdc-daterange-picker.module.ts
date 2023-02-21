import { NgModule } from '@angular/core';
import { NgxMdcDaterangePickerComponent } from './ngx-mdc-daterange-picker.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatNativeDateModule} from "@angular/material/core";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    NgxMdcDaterangePickerComponent
  ],
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    FormsModule
  ],
  exports: [
    NgxMdcDaterangePickerComponent
  ]
})
export class NgxMdcDaterangePickerModule { }
