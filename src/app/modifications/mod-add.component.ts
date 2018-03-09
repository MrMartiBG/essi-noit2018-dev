import { Component } from '@angular/core';
import { SocketFuncService } from '../socket-func.service';

@Component({
  template:
  `
  <h1> Add modification to car </h1>
  <div class="container" style="width: 100%; max-width: 250px;">
    <form (ngSubmit)="addMod()" #addModForm="ngForm">
      <div class="form-group">
        <label for="carId">ID of car</label>
        <input type="text" class="form-control" id="carId" required [(ngModel)]="carId" name="carId">
      </div>
      <div class="form-group">
        <label for="serviceId">ID of service</label>
        <input type="text" class="form-control" id="serviceId" required [(ngModel)]="serviceId" name="serviceId">
      </div>
      <div class="form-group">
        <label for="workStatus">Status of modification<br>(complete, in progress, etc.)</label>
        <input type="text" class="form-control" id="workStatus" required [(ngModel)]="workStatus" name="workStatus">
      </div>
      <div class="form-group">
        <label for="mileage">Mileage</label>
        <input type="text" class="form-control" id="mileage" required [(ngModel)]="mileage" name="mileage">
      </div>
      <div class="form-group">
        <label for="modType">Type of modification<br>(repair, change, add, etc.)</label>
        <input type="text" class="form-control" id="modType" required [(ngModel)]="modType" name="modType">
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
    this.mileage=0;
  }
}
