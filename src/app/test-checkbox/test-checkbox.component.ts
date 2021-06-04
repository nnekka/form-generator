import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';


@Component({
  selector: 'app-test-checkbox',
  templateUrl: './test-checkbox.component.html',
  styleUrls: ['./test-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TestCheckboxComponent),
      multi: true
    }
  ]
})
export class TestCheckboxComponent implements ControlValueAccessor {

  @Input() currentValue: string[] = []
  @Input() options = []
  dataArray: string[] = []


  onChange: any = (event: any) => { }; //наружу
  onTouched: any = () => { }

  writeValue(obj: string[]): void {   //внутрь
    if (!obj){
      return
    }
    this.currentValue = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  updateValue(value: any, option: string) {
    if (value){
      this.dataArray.push(option)
    } else {
      this.dataArray = this.dataArray.filter(d => d !== option)
    }
    this.onChange(this.dataArray)
  }
}
