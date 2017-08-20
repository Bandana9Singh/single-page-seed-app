import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { EmailValidators } from './common/email.validators';
import { User } from '../shared/interfaces';
import { UserService } from '../shared/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  private form: FormGroup;
  
  constructor(private _fb: FormBuilder, private _userService: UserService, private _activeRoute: ActivatedRoute) {
    this.form = _fb.group({
      name: ['',Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])],
      email: ['',Validators.compose([
        Validators.required,
        EmailValidators.invalidEmail
      ])],
      phone: [''],
      address: _fb.group({
        street: [''],
        suite: [''],
        city: [''],
        zipcode: ['']
      })
    });
  }

  ngOnInit() {
    
    /*this._activeRoute.paramMap.subscribe(params => {
      let id = +params.get('id');
      if(!id)
        return;
      this._userService.getUser(id).subscribe(user => {
        this.user = user;
        console.log("User populated");
      });
     }); */
  }

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  saveButton() {
    this._userService.addUser(this.form.value);
  }
}
