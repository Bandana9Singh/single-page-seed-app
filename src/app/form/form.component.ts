import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../shared/data.service';

import { EmailValidators } from './common/email.validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  form : FormGroup ;
  users;

  constructor(fb: FormBuilder, private _route: ActivatedRoute){
    
    this.form = fb.group({
      name: ['',Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])],
      email: ['', Validators.compose([
        Validators.required,
        EmailValidators.invalidEmail
      ])],
      phone: [],
      address: fb.group({
        street: [],
        suite: [],
        city: [],
        zipcode: []
      })
    });
  }

  ngOnInit() {
    this._route.paramMap.subscribe(
      params => {
        console.log(+params.get('id'));
      }
    );
  }
  get name(){
    return this.form.controls.name;
  }
  get email(){
    return this.form.controls.email;
  }
  save(){
    console.log(this.form);
  }  
}
