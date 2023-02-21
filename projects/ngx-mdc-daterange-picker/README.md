
# ngx-mdc-datepicker

A brief description of what this project does and who it's for

A lightweight library to use angular 15+ datepicker with the labels on side to select date from a given labels like last week, last month, previous year. Inspired from [ngx-datepicker](https://www.npmjs.com/package/ngx-daterangepicker-material).

- No dependency on momentjs


## Installation

Install ngx-mdc-datepicker

```bash
  npm install ngx-mdc-datepicker
```


```
import { MatFormFieldModule } from '@angular/forms';
import { NgxMdcDaterangePickerModule } from 'ngx-mdc-daterangepicker';

@NgModule({
    imports: [
        ... ,
        MatFormFieldModule,
        NgxMdcDaterangePickerModule
    ]
})
export class AppModule {}
```
## Usage/Examples

```javascript
<ngx-mdc-daterangepicker [(dateRange)]="dateRange"></ngx-mdc-daterangepicker>
```

```typescript
dateRange: {start: Date, end:Date}
```
## License

[MIT](https://choosealicense.com/licenses/mit/)


## Contributing

Contributions are always welcome!


