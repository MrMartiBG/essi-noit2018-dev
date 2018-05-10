import { Component } from '@angular/core';
import { SocketFuncService } from '../socket-func.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html'
})
export class FormLoginComponent {
  email: string;
  password: string;

  constructor(public socketFunc: SocketFuncService) { }

  result_login(info) {
    console.log(info);
    if(info.status == "successful"){
      this.socketFunc.isLoggedIn = true;
    }
  }

  result_logout(info) {
    console.log(info);
    if(info.status == "successful"){
      this.socketFunc.isLoggedIn = false;
    }
  }

  loginUser() {
    this.socketFunc.loginUser(
      {
        email: this.email,
        password: this.password
      },
      result_login => this.result_login(result_login)
    );
    this.email='';
    this.password='';
  }
  logoutUser() {
    this.socketFunc.logoutUser(
      result_logout => this.result_logout(result_logout)
    )
  }
}
