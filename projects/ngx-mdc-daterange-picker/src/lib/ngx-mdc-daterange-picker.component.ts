import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';
import {MatCalendar, MatDateRangePicker} from "@angular/material/datepicker";
import {MatFormFieldAppearance} from "@angular/material/form-field";

@Component({
  selector: 'ngx-mdc-daterange-picker',
  template: `
    <mat-form-field [appearance]="appearance">
      <mat-label>{{label}}</mat-label>
      <mat-date-range-input [rangePicker]="picker" #dateRangeInput>
        <input matStartDate placeholder="Start date" [(ngModel)]="dateRange.start">
        <input matEndDate placeholder="End date" [(ngModel)]="dateRange.end">
      </mat-date-range-input>
      <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-date-range-picker #picker (opened)="openDateRangePicker()">
        <mat-calendar #matcalander [startAt]="dateRange.start" (selectedChange)="dataChanged()"></mat-calendar>
      </mat-date-range-picker>
    </mat-form-field>
  `,
  styles: [
    `.mat-datepicker-content-container {
      display: flex;
    }

    .ngx-mdc-container {
      padding: 10px !important;
    }

    `
  ]

})
export class NgxMdcDaterangePickerComponent implements OnInit {
  @Input() label = 'Enter a date range';
  @Input() appearance: MatFormFieldAppearance = 'fill';
  @Input() dateRange: { start: Date, end: Date } = {start: new Date(), end: new Date()};
  @Output() dateRangeChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() dateSelected: EventEmitter<any> = new EventEmitter<any>();


  @ViewChild('dateRangeInput') dateRangeInput: any;
  @ViewChild(MatDateRangePicker, {static: false}) picker: any;
  // @ts-ignore
  @ViewChild(MatCalendar, {static: false}) calendar: MatCalendar<Date>;

  today = new Date();

  constructor(public renderer2: Renderer2, public el: ElementRef) {
    // DefaultMatCalendarRangeStrategy
  }

  ngOnInit() {
    if (!this.dateRange) {
      this.dateRange = {start: new Date(), end: new Date()};
    }
  }

  openDateRangePicker() {
    const container = document.createElement('div');
    container.style.paddingTop = '30px';
    this.getDateMapping().forEach((item) => {
      const div = document.createElement('div');
      div.style.padding = '10px';
      div.style.cursor = 'pointer';

      div.addEventListener('click', () => {
        this.dateRange.start = item.start;
        this.dateRange.end = item.end;
        this.picker.select(item.start);
        this.picker.select(item.end);
        this.calendar.viewChanged.emit('year');
        this.dataChanged();
        this.picker.close();
        // TODO:
        // this.calendar._goToDateInView(item.start, "year");
        // this.calendar.updateTodaysDate();
        // this.matcalander.startView = 'month';
        // console.log(this.matcalander.currentView);
        // this.matcalander.viewChanged.emit('year');
        // this.matcalander.updateTodaysDate();
        // this.picker.close();
        // console.log(this.matcalander);
        // console.log();
        // console.log(this.matcalander.updateTodaysDate());
        // this.picker.focusActiveCell()

      })
      const span = document.createElement('span');
      span.setAttribute('class', 'mdc-button__label');
      span.innerHTML = item.label;
      div.appendChild(span);
      container.appendChild(div);
    })
    this.renderer2.setStyle(this.picker._overlayRef._pane.firstChild, 'display', 'flex');
    this.renderer2.appendChild(this.picker._overlayRef._pane.firstChild, container);
    console.log(this.picker);
    this.picker.closedStream.subscribe((data: any) => {
      this.dataChanged();
    });
  }


  dataChanged() {
    this.dateRangeChange.emit(this.dateRange);
  }

  getDateMapping() {
    return [
      {
        start: new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate(), 0, 0, 0),
        end: new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate(), 23, 59, 59),
        label: 'Today'
      },
      {
        start: new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() - 1, 0, 0, 0),
        end: new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() - 1, 23, 59, 59),
        label: 'Yesterday'
      },
      {
        start: new Date(this.today.getFullYear(), this.today.getMonth() - 1, 1),
        end: new Date(this.today.getFullYear(), this.today.getMonth(), 0),
        label: 'Last Month'
      },
      {
        start: new Date(this.today.getFullYear(), this.today.getMonth() - 3, 1),
        end: new Date(this.today.getFullYear(), this.today.getMonth(), 0),
        label: 'Last 3 Month'
      },
      {
        start: new Date(this.today.getFullYear() - 1, 1, 1),
        end: new Date(this.today.getFullYear(), 0, 0),
        label: 'Previous Year'
      }
    ]
  }

}
