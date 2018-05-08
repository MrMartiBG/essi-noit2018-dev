import { Component , OnInit} from '@angular/core';
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
  <h1> You have {{carsService.length}} car/s in this service</h1>
  <div class="container">
    <form (ngSubmit)="update()" #carServiceForm="ngForm">
      <div class="form-group">
        <label for="service_id">ID of your service</label>
        <input type="text" class="form-control" id="service_id" required [(ngModel)]="service_id" name="service_id">
      </div>
      <button type="submit" class="btn btn-update-car-service-list" [disabled]="!carServiceForm.form.valid">Update</button>
    </form>
    <div class="card border-dark mb-3" *ngFor="let car of cars" style="width: 100%;">
      <div class="card-header">
        <div class="row">
          <div class="col">
            <h3 style="float: left; ">{{car.brand}} {{car.model}}</h3>
          </div>
          <div class="col">
            <div class="btn-group dropright" role="group" style="float: right;">
              <button id="carActions" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Service
              </button>
              <div class="dropdown-menu" aria-labelledby="carActions">
                <a class="dropdown-item">Add modification</a>
                <a class="dropdown-item">Service History</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-4">
            <img src="../favicon.ico" alt="img_logo_essi" style="width:100%;">
          </div>
          <div class="col-8">
            <div class="row">
              <div class="col" style="text-align: right;">
                <p class="card-text">Brand:</p>
              </div>
              <div class="col" style="text-align: left;">
                <p class="card-text">{{car.brand}}</p>
              </div>
            </div>
            <div class="row">
              <div class="col" style="text-align: right;">
                <p class="card-text">Model:</p>
              </div>
              <div class="col" style="text-align: left;">
                <p class="card-text">{{car.model}}</p>
              </div>
            </div>
            <div class="row">
              <div class="col" style="text-align: right;">
                <p class="card-text">Generation:</p>
              </div>
              <div class="col" style="text-align: left;">
                <p class="card-text">{{car.generation}}</p>
              </div>
            </div>
            <div class="row">
              <div class="col" style="text-align: right;">
                <p class="card-text">Engine:</p>
              </div>
              <div class="col" style="text-align: left;">
                <p class="card-text">{{car.engine}}</p>
              </div>
            </div>
            <div class="row">
              <div class="col" style="text-align: right;">
                <p class="card-text">VIN Number:</p>
              </div>
              <div class="col" style="text-align: left;">
                <p class="card-text">{{car.vin_number}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
})
export class ServiceCarListComponent {
  carsService = [];
  cars = [];
  service_id: number;
  car_id: number;
  constructor(private socketFunc: SocketFuncService) { }
  result_cars(info){
      console.log("result_cars",info.info[0]);
      this.cars.push(info.info[0]);
  }
  result_service(info) {
    console.log("result_service",info);
    this.carsService = info.info;
    for(var i = 0 ; i < info.info.length ; i++) {
      this.socketFunc.fetchCarService(
        {
          id: info.info[i].car_id
        },
        result_cars => this.result_cars(result_cars)
      )
    }
    console.log(this.carsService);
  }
  update() {
    this.socketFunc.fetchServiceCar(
      {
        id: this.service_id
      },
      result_service => this.result_service(result_service)
    )
  }
}
//TO DO: add table view of cars
