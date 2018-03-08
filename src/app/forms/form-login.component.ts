import { Component } from '@angular/core';
import { SocketFuncService } from '../socket-func.service'

@Component({
  selector: 'app-form-login',
  template:
  `
  <div class="container" style="width: 100%; max-width: 250px;">
    <h1> Registration form </h1>
    <form (ngSubmit)="loginUser()" #userLoginForm="ngForm">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" class="form-control" id="username" required [(ngModel)]="username" name="username">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" required [(ngModel)]="password" name="password">
      </div>
      <div style="wodth: 100%;">
        <button type="submit" class="btn btn-login-user" [disabled]="!userLoginForm.form.valid">Login!</button>
        <a routerLink="/register"><button class="btn btn-form-reg">Register now!</button></a>
      </div>
    </form>
  </div>
  `
})
export class FormLoginComponent {
  username: string;
  password: string;

  constructor(private socketFunc: SocketFuncService) { }

  result(info) {
    console.log(info);
  }

  loginUser() {
    this.socketFunc.loginUser(
      {
        username: this.username,
        password: this.password
      },
      this.result
    );
    this.username='';
    this.password='';
  }
}
