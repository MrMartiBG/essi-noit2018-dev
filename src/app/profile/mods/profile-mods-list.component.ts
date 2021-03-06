import { Component, OnInit } from '@angular/core';
import { SocketFuncService } from '../../socket-func.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile-mods-list.component.html'
})
export class ProfileModsListComponent implements OnInit {
  mods = [];
  cars = [];
  car_selection = {};
  mod_selection = {};

  constructor(private socketFunc: SocketFuncService) { }
  result_mods(info) {
    console.log(info);
    this.mods = info.info;
  }
  result_cars(info) {
    console.log(info);
    this.cars = info.info;
  }
  ngOnInit() {
    this.socketFunc.getModsUser(
      result_mods => this.result_mods(result_mods)
    );
    this.socketFunc.getCarsUser(
      result_cars => this.result_cars(result_cars)
    );
  }

}
