import { Component, OnInit } from '@angular/core';
import { SocketFuncService } from '../../socket-func.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile-mods-add.component.html'
})
export class ProfileModsAddComponent implements OnInit {
  cars = [];
  car_selection = {};
  modInfo = {car_id: null, zone: null, type: null, date: null, mileage: null, part: null, part_make: null, info: null};
  constructor(private socketFunc: SocketFuncService) { }

  result_add(info) {
    console.log(info);
  }
  result_cars(info) {
    console.log(info);
    this.cars = info.info;
  }
  addModUser() {
    this.socketFunc.addModUser(
      this.modInfo,
      result_add => this.result_add(result_add)
    )
  }
  ngOnInit() {
    this.socketFunc.getCarsUser(
      result_cars => this.result_cars(result_cars)
    )
  }

}
