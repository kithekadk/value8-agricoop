import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from '../Helper/validateForm';
import { HttpClient } from '@angular/common/http';

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
      private fb: FormBuilder,
      private http: HttpClient,
      private router: Router,
      private toast: NgToastService,
      private auth: AuthService,
  
    ) { }

  ngOnInit(): void {
    this.SignupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern("^((\\+254-?)|0)?[0-9]{12}$")]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      Cpassword: ['', Validators.required]
    }
      , {
        validators: this.MatchPass('password', 'Cpassword')
      })
  }

  Signup() {
    if (this.SignupForm.valid) {
         // send obj to db
      console.log(this.SignupForm.value);
        this.auth.registerUser(this.SignupForm.value)
        .subscribe(res => {
          this.toast.success
          ({ detail: 'Success Message', summary: "Registration Completed Successfully!!", duration: 5000 })
          // alert('Signup successfully');
          this.SignupForm.reset();
          this.router.navigate(['otp']);
        }, err => {
          this.toast.error
          ({ detail: 'Failed Message', summary: "Registration Failed, Something Went wrong!!", duration: 5000 })
        })
    } else {
      ValidateForm.validateAllFormFields(this.SignupForm)
      alert('Your Form is Empty')
    }

  }
}