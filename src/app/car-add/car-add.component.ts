import { Component } from '@angular/core';
import { SocketFuncService } from '../socket-func.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent {
  brand: string;
  model: string;
  generation: string;
  engine: string;
  vin: string;

  constructor(private socketFunc: SocketFuncService) { }

  addCar() {
    this.socketFunc.addCar({
      brand: this.brand,
      model: this.model,
      generation: this.generation,
      engine: this.engine,
      vin: this.vin
    });
    this.brand='';
    this.model='';
    this.generation='';
    this.engine='';
    this.vin='';
  }
}
