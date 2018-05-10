import { Component } from '@angular/core';
import { SocketFuncService } from '../socket-func.service';

@Component({
  selector: 'app-form-forgot',
  templateUrl: './form-forgot.component.html'
})
export class FormForgotComponent {
  email: string;

  constructor(private socketFunc: SocketFuncService) { }

  result(info) {
    console.log(info);
  }

  forgotPass() {
    this.socketFunc.resetPassword(
      {
        email: this.email
      },
      this.result
    );
    this.email='';
  }
}
