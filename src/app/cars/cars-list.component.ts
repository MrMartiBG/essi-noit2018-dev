import { Component , OnInit} from '@angular/core';
import { SocketFuncService } from '../socket-func.service';

@Component({
  template:
  `
  <style>
  </style>
  <h2> Displaying {{cars.length}} car/s</h2>
  <div class="container">
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
export class CarsListComponent {
  cars = [];
  constructor(private socketFunc: SocketFuncService) { }
  result(info) {
    console.log(info);
    this.cars = info.info;
    console.log(this.cars);
  }
  ngOnInit() {
    /*
    this.socketFunc.fetchUserCars(
      result => this.result(result)
    );*/
  }
}
