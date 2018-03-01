import { Component } from '@angular/core';
import { SocketFuncService } from '../socket-func.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  username: string;
  password: string;

  constructor(private socketFunc: SocketFuncService) { }

  loginUser() {
    this.socketFunc.loginUser({username: this.username, password: this.password});
    this.username='';
    this.password='';
  }
}
