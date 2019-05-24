import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.sass']
})
export class AuthorizationComponent implements OnInit {
  loginForm:FormGroup;

  constructor(public fb: FormBuilder, public auth: AuthService, public router: Router) { 
    this._buildForm();
  }

  ngOnInit() { 
  }

  protected login() {
    if (this.loginForm.invalid) {
      return false;
    }
    const password = this._getField('password');
    const email = this._getTrimUsername();
    this.auth.login(email, password);
  }

  private _buildForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  private _getTrimUsername() {
    return this._getField('email').replace(/ +$/, '');
  }
  private _getField(field: string) {
    return this.loginForm.controls[field].value;
  }

}
