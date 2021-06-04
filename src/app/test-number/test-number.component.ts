import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';


@Component({
  selector: 'app-test-number',
  templateUrl: './test-number.component.html',
  styleUrls: ['./test-number.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TestNumberComponent),
      multi: true
    }
  ]
})
export class TestNumberComponent implements ControlValueAccessor {

  @Input() currentValue: number = 0

  onChange: any = (event: any) => { };
  onTouched: any = () => { };

  writeValue(obj: any): void {
    this.currentValue = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

}
