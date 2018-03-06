import { Component } from '@angular/core';
import { SocketFuncService } from '../socket-func.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  mobile: string;

  constructor(private socketFunc: SocketFuncService) { }

  registerUser() {
    this.socketFunc.registerUser({
        username: this.username,
        password: this.password,
        email: this.email,
        firstname: this.firstName,
        lastname: this.lastName,
        mobile: this.mobile
      });
    this.username='';
    this.password='';
    this.email='';
    this.firstName='';
    this.lastName='';
    this.mobile='';
  }
}
