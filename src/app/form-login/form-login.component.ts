import { Component } from '@angular/core';
import { SocketFuncService } from '../socket-func.service'

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
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
