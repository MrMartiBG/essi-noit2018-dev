import { Component, OnInit } from '@angular/core';
import { SocketFuncService } from '../socket-func.service';

@Component({
  template:
  `
  <style>
    table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    max-width: 1500px;
    }
    td, th {
      border: 1px solid #dddddd;
      text-align: center;
      padding: 8px;
    }
    tr:nth-child(even) {
      background-color: #dddddd;
    }
  </style>
  <h1> Modifications of</h1>
  <div class="container" style="width: 100%; max-width: 250px;">
    <form (ngSubmit)="getMods()" #modListForm="ngForm">
      <div class="form-group">
        <select class="form-control" id="carId" required [(ngModel)]="carId" name="carId">
          <option *ngFor="let car of cars" [value]="car.id">ID:{{car.id}}  {{car.brand}} {{car.model}}</option>
        </select>
      </div>
      <button type="submit" class="btn btn-get-mods" [disabled]="!modListForm.form.valid">Get modifications</button>
    </form>
  </div>
  <h1> You have {{mods.length}} modification/s on this car</h1>
  <table align="center">
    <tr>
      <th>Modification ID</th>
      <th>Modification satus</th>
      <th>Mileage at modification</th>
      <th>Date of modification</th>
      <th>Modification type</th>
      <th>Modified part</th>
      <th>Modification description</th>
    </tr>
    <tr *ngFor="let object of mods">
      <td width="5%">{{object.modification_id}}</td>
      <td width="10%">{{object.status}}</td>
      <td width="15%">{{object.mileage}}</td>
      <td width="20%">{{object.date | date}}</td>
      <td width="10%">{{object.type}}</td>
      <td width="20%">{{object.part}}</td>
      <td width="20%">{{object.description}}</td>
    </tr>
  </table>
  `
})
export class ModsListComponent {
  carId: number;
  carBrand: string;
  carModel: string;
  cars = [];
  mods = [];
  constructor(private socketFunc: SocketFuncService) { }
  result(info) {
    console.log(info);
    this.mods = info.info;
    console.log(this.mods);
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
  getMods() {
    this.socketFunc.fetchModification(
      {
        id: this.carId
      },
      result => this.result(result)
    );
  }
}
