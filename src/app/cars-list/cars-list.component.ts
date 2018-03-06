import { Component , OnInit} from '@angular/core';
import { SocketFuncService } from '../socket-func.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent {
  constructor(private socketFunc: SocketFuncService) { }

  ngOnInit() {
    this.socketFunc.fetchCar();
  }
}
