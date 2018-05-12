import { Component } from '@angular/core';
import { SocketFuncService } from '../socket-func.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html'
})
export class FormRegisterComponent {
  usEmail: string;
  fName: string;
  lName: string;
  shEmail: string;
  shName: string;

  constructor(private socketFunc: SocketFuncService) { }

  result(info) {
    console.log(info);
  }

  registerUser() {
    this.socketFunc.registerUser(
      {
        email: this.usEmail,
        first_name: this.fName,
        last_name: this.lName,
      },
      this.result
    );
    this.usEmail='';
    this.fName='';
    this.lName='';
  }
}
