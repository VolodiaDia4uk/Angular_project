import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService} from '../../services/auth.service';
import { Router, Params } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  constructor(public fb: FormBuilder, public auth: AuthService, private router: Router) { }
  public loginForm: FormGroup = this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    password: ['', [
      Validators.required,
      Validators.minLength(5)
    ]],
  });
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
  tryLogin() {
   return this.auth.doLogin(this.email.value, this.password.value)
      .then(res => {
        this.router.navigate(['/home']);
      }, err => {
        console.log(err);
      })};
}
