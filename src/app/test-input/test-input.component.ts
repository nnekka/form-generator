import {Component, ElementRef, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TestInputComponent),
      multi: true
    }
  ]
})
export class TestInputComponent implements ControlValueAccessor {

  // @Input('input') inputRef: ElementRef

  @Input() value: string = 'number'
  @Input() formControlName: string = 'name'
  @Input() val: string | number

  onChange: any = (event: any) => { };
  onTouched: any = () => { };

  constructor() { }


  writeValue(obj: any): void {
   this.val = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
    console.log(fn)
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  // setDisabledState?(isDisabled: boolean): void {
  //   this.disabled = isDisabled;
  // }


}
