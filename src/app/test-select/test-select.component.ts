import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {TestInputComponent} from '../test-input/test-input.component';
import {ControlContainer, ControlValueAccessor, FormGroupDirective, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-test-select',
  templateUrl: './test-select.component.html',
  styleUrls: ['./test-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>TestSelectComponent),
      multi: true
    }
  ],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class TestSelectComponent implements ControlValueAccessor {

  @Input() type: string = 'select'
  @Input() formControlName: string = 'name'
  @Input() options = []
  @Input() currentValue: string | number

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
