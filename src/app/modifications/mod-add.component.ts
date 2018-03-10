import { Component, OnInit } from '@angular/core';
import { SocketFuncService } from '../socket-func.service';

@Component({
  template:
  `
  <h1> Add modification to car </h1>
  <div class="container" style="width: 100%; max-width: 250px;">
    <form (ngSubmit)="addMod()" #addModForm="ngForm">
      <div class="form-group">
        <label for="carId">Select car</label>
        <select class="form-control" id="carId" required [(ngModel)]="carId" name="carId">
          <option *ngFor="let car of cars" [value]="car.id">{{car.id}} {{car.brand}} {{car.model}}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="serviceId">ID of service</label>
        <input type="text" class="form-control" id="serviceId" required [(ngModel)]="serviceId" name="serviceId">
      </div>
      <div class="form-group">
        <label for="workStatus">Status</label>
        <select class="form-control" id="workStatus" required [(ngModel)]="workStatus" name="workStatus">
          <option *ngFor="let status of statusOptions" [value]="status">{{status}}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="mileage">Mileage</label>
        <input type="text" class="form-control" id="mileage" required [(ngModel)]="mileage" name="mileage">
      </div>
      <div class="form-group">
        <label for="modType">Type of modification</label>
        <select class="form-control" id="modType" required [(ngModel)]="modType" name="modType">
          <option *ngFor="let mod of modTypeOptions" [value]="mod">{{mod}}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="modPart">Modified part</label>
        <input type="text" class="form-control" id="modPart" required [(ngModel)]="modPart" name="modPart">
      </div>
      <div class="form-group">
        <label for="modDescription">Modification description</label>
        <input type="text" class="form-control" id="modDescription" required [(ngModel)]="modDescription" name="modDescription">
      </div>
      <button type="submit" class="btn btn-add-mod-service" [disabled]="!addModForm.form.valid">Add modification</button>
    </form>
  </div>
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
  ngOnInit() {
    this.socketFunc.fetchMyCars(
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
    this.mileage=null;
  }


}
