import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { EmailValidators } from './common/email.validators';
import { UserService } from '../shared/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: []
})
export class FormComponent implements OnInit{
  form : FormGroup ;
  address: FormGroup ;
  users;

  constructor(private fb: FormBuilder, private _route: ActivatedRoute, private _userService: UserService){
    
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
       //console.log(+params.get('id'));
       let id = params.get('id');
       if(id != undefined) {
         console.log(this.form);
         this._userService.getUser(+params.get('id')).subscribe(user=>{
           console.log(user);
           this.form.controls.name.setValue(user.name);
           this.form.controls.email.setValue(user.email);
           this.form.controls.phone.setValue(user.phone);
        });
       }
       else {
        console.log("id not available");
       }
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
    //this._userService.getUser(1).subscribe(user=>console.log(user));
  }  
}
