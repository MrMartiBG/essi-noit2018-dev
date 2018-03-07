import { Component , OnInit} from '@angular/core';
import { SocketFuncService } from '../socket-func.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent {
  carsNumber: number;
  carsNumber = 0;
  constructor(private socketFunc: SocketFuncService) { }
  result(info) {
    console.log(info);
    this.carsNumber = info.info.length;
    console.log(this.carsNumber);
  }
  ngOnInit() {
    this.socketFunc.fetchMyCars(
      this.result
    );
  }
}
