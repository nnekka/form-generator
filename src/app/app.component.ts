import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-project';
  formConfig = [
    {formControlName: 'name', label: 'Имя', type: 'text', required: false},
    {formControlName: 'age', label: 'Возраст', type: 'select', required: true, options: [20, 23, 25]},
    {formControlName: 'input', label: 'Вооот', type: 'checkbox'},
    {formControlName: 'input2', label: 'Так', type: 'checkbox'},
  ]
}
