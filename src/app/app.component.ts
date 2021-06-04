import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  form: FormGroup
  formConfig = []

  constructor(
    private http: HttpClient
  ){}

  ngOnInit(): void{
    this.form =  new FormGroup({})
    this.http.get('http://localhost:2000/formConfig-1')
      .subscribe(
        (formConfig) => {
          this.formConfig = formConfig
          this.buildForm(this.formConfig)
        }
      )

  }


  buildForm(config){
    config.forEach(item => {
      this.form.setControl(`${item.formControlName}`, new FormControl(null))
    })
  }

  onReset(){
    this.form.reset({
      name: 'Bbb',
      age: 23,
      skills: [
        'js'
      ]
    })
  }

  onSubmit(){
    console.log(this.form.value)
  }

}
