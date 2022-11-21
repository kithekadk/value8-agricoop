import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public SignupForm!: FormGroup;
  visible: boolean = false;
  changepass: boolean = true;
  

  viewpass() {
    this.visible = !this.visible;
    this.changepass = !this.changepass;
  }

  MatchPass(passName: string, confirmPassName: string) {
    return (formGroup: FormGroup) => {

      const control = formGroup.controls[passName];
      const matchingControl = formGroup.controls[confirmPassName];

      if (matchingControl.errors && !matchingControl.errors['MatchPass']) {
        return
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ MatchPass: true });
      }
      else {
        matchingControl.setErrors(null);
      }
    }

  }
  constructor
    (

    ) { }

  ngOnInit(): void {

  }

  Signup() {
  }
}