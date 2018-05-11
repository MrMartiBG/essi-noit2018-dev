import { Component, OnInit } from '@angular/core';
import { SocketFuncService } from '../../socket-func.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile-data-basic.component.html'
})
export class ProfileDataBasicComponent implements OnInit {
  accInfoUser = {};
  password: string;
  fName: string;
  lName: string;
  phone: number;
  birthdate: number;
  country: string;
  city: string;
  info: string;
  constructor(private socketFunc: SocketFuncService) { }
  result_get(info) {
    console.log(info);
    this.accInfoUser = info.info;
    console.log(this.accInfoUser)
  }
  result_set(info) {
    console.log(info);
  }
  ngOnInit() {
    this.socketFunc.getDataUser(
      result_get => this.result_get(result_get)
    );
  }
  updateAccUser () {
    this.socketFunc.updateDataUser(
      {
        password: this.password,
        first_name: this.fName,
        last_name: this.lName,
        phone: this.phone,
        birthdate: this.birthdate,
        country: this.country,
        city: this.city,
        info: this.info
      },
      result_set => this.result_set(result_set)
    )
  }
}
