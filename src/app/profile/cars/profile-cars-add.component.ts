import { Component } from '@angular/core';
import { SocketFuncService } from '../../socket-func.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile-cars-add.component.html'
})
export class ProfileCarsAddComponent {
  make: string;
  model: string;
  generation: string;
  engine: string;
  vin_number: string;
  registration_number: string;
  public: number;
  info: string;

  constructor(private socketFunc: SocketFuncService) { }

  result(info) {
    console.log(info);
  }

  addCar() {
    this.socketFunc.addCar(
      {
        make: this.make,
        model: this.model,
        generation: this.generation,
        engine: this.engine,
        vin_number: this.vin_number,
        registration_number: this.registration_number,
        public: this.public,
        info: this.info
      },
      result => this.result(result)
    );
    this.make='';
    this.model='';
    this.generation='';
    this.engine='';
    this.vin_number='';
    this.registration_number='';
    this.public=null;
    this.info='';
  }
}
