import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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


  constructor(

  ) { }

  ngOnInit(): void {
   
  }

  login() {
    
    }
    
}
