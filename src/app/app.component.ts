import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-project';

  form: FormGroup
  formConfig = [
    {formControlName: 'name', label: 'Имя', type: 'text', required: false},
    {formControlName: 'age', label: 'Возраст', type: 'select', required: true, options: [20, 23, 25]},
    {formControlName: 'input', label: 'Вооот', type: 'checkbox'},
    {formControlName: 'input2', label: 'Так', type: 'checkbox'},
  ]

  constructor(){}

  ngOnInit(): void{
    this.form =  new FormGroup({})
    this.buildForm(this.formConfig)
  }

  // onCheckChange(value, name){
  //   this.form.get(`${name}`).setValue(value)
  // }

  buildForm(config){
    config.forEach(item => {
      this.form.setControl(`${item.formControlName}`, new FormControl(null))
    })

  }
  onReset(){
    this.form.reset()
  }

  onSubmit(){
    console.log(this.form.value)
  }

}
