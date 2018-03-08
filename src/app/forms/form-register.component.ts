import { Component } from '@angular/core';
import { SocketFuncService } from '../socket-func.service';

@Component({
  selector: 'app-form-register',
  template:
  `
  <div class="container" style="width: 100%; max-width: 250px;">
    <h1> Registration form </h1>
    <form (ngSubmit)="registerUser()" #userRegForm="ngForm">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" class="form-control" id="username" required [(ngModel)]="username" name="username">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" required [(ngModel)]="password" name="password">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" class="form-control" id="email" required [(ngModel)]="email" name="email">
      </div>
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input type="text" class="form-control" id="firstName" required [(ngModel)]="firstName" name="firstName">
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input type="text" class="form-control" id="lastName" required [(ngModel)]="lastName" name="lastName">
      </div>
      <div class="form-group">
        <label for="mobile">Mobile</label>
        <input type="text" class="form-control" id="mobile" required [(ngModel)]="mobile" name="mobile">
      </div>
      <button type="submit" class="btn btn-add-car" [disabled]="!userRegForm.form.valid">Add car</button>
    </form>
  </div>
  `
})
export class FormRegisterComponent {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  mobile: string;

  constructor(private socketFunc: SocketFuncService) { }

  result(info) {
    console.log(info);
  }

  registerUser() {
    this.socketFunc.registerUser(
      {
        username: this.username,
        password: this.password,
        email: this.email,
        firstname: this.firstName,
        lastname: this.lastName,
        mobile: this.mobile
      },
      this.result
    );
    this.username='';
    this.password='';
    this.email='';
    this.firstName='';
    this.lastName='';
    this.mobile='';
  }
}
