import { Component, OnInit } from '@angular/core';
import { SocketFuncService } from '../socket-func.service';

@Component({
  template:
  `
  
  `
})
export class ModAddComponent {
  cars = [];
  modTypeOptions = ['Repair', 'Upgrade', 'Change']
  statusOptions = ['Complete', 'In progress', 'Planned']
  carId: string;
  workStatus: string;
  serviceId: string;
  mileage: number;
  modType: string;
  modPart: string;
  modDescription: string;

  constructor(private socketFunc: SocketFuncService) { }

  result(info) {
    console.log(info);
  }
  result_cars(info) {
    console.log("result_cars", info.info);
    for(var i = 0 ; i<info.info.length ; i++) {
      this.cars.push(info.info[i]);
    }
  }
  ngOnInit() {/*
    this.socketFunc.fetchUserCars(
      result_cars => this.result_cars(result_cars)
    );
  }
  addMod() {
    this.socketFunc.addModification(
      {//modInfo
        type: this.modType,
        part: this.modPart,
        description: this.modDescription
      },
      {//carInfo
        id: this.carId,
        status: this.workStatus,
        mileage: this.mileage
      },
      {//serviceInfo
        id: this.serviceId
      },
      this.result
    );
    this.modType='';
    this.modPart='';
    this.modDescription='';
    this.carId='';
    this.workStatus='';
    this.serviceId='';
    this.mileage=null;*/
  }


}
