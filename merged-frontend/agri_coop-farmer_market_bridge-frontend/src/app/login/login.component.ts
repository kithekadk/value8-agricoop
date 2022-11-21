import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from '../Helper/validateForm';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public LoginForm!: FormGroup;
  visible: boolean = false;
  changepass: boolean = true;
  private _loginUrl = "http://localhost:3000/users/"

  viewpass() {
    this.visible = !this.visible;
    this.changepass = !this.changepass;
  }


  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private toast: NgToastService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.LoginForm.valid) {
      // send obj to db
      console.log(this.LoginForm.value);
      this.http.get<any>(this._loginUrl)
        .subscribe(res => {
          const user = res.find((a: any) => {
            return a.email === this.LoginForm.value.email &&
              a.password === this.LoginForm.value.password
          });
          if (user) {
            // alert('Login Successfully');
            this.toast.success({ detail: 'SUCCESS!!!!', summary: "Login Successfully!!", duration: 5000 })
            this.LoginForm.reset();
            this.router.navigate(['dashboard']);
          }
          else {
            this.toast.error({ detail: 'FAILED!!!', summary: "Login Failed!! User Not Found", duration: 5000 })
          }
        },
          err => {
            alert('Something went Wrong ,Try again!!!!!')
          })

    }
    else {
      ValidateForm.validateAllFormFields(this.LoginForm)
      alert('Form is invalid')
    }
  }
}