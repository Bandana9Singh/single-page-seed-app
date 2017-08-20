import { AbstractControl, ValidationErrors } from '@angular/forms';

export class EmailValidators {
    static invalidEmail(control: AbstractControl) : ValidationErrors | null {
        if(!(control.value as string)
        .match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            return {
                invalidEmail: true
            }
        }
    }
}