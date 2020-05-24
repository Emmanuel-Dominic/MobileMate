import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { LoginCredential } from '../types';
import { Router } from '@angular/router';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginFormGroup: FormGroup;

  constructor(private _router: Router, private _loginService: LoginService, private _formBuilder: FormBuilder) {
    this.loginFormGroup = this._formBuilder.group({
      email: [
        "",
        [
          Validators.required,
          Validators.pattern(emailRegex),
          Validators.email,
        ],
      ],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ],
      ]
    });
  }

  ngOnInit() {
  }

  login() {
    const loginCredential: LoginCredential = this.loginFormGroup.value;
    this._loginService.login(loginCredential)
      .then((authData) => {
        this._router.navigate(["/tabs"]);
        console.log('Logged in successfully!');
        console.log(authData);
      }).catch((authError) => {
        console.error('Login failed:', authError);
      });
  }
}
