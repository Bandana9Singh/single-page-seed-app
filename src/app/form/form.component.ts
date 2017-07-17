import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
  form = new FormGroup({
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(5)
      ]),
    email: new FormControl('', Validators.required)
  });

  get name(){
    return this.form.controls.name;
  }
  get email(){
    return this.form.controls.email;
  }
  onClick(){
    console.log(this.form);
  }  
}
