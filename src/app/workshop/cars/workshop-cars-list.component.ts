import { Component, OnInit } from '@angular/core';
import { SocketFuncService } from '../../socket-func.service';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop-cars-list.component.html'
})
export class WorkshopCarsListComponent implements OnInit {
  cars = [];
  constructor(private socketFunc: SocketFuncService) { }
  result(info) {
    console.log(info);
    this.cars = info.info;
    console.log(this.cars);
  }
  ngOnInit() {
    this.socketFunc.getCarsShop(
      {
        account_service_id: this.socketFunc.current_service
      },
      result => this.result(result)
    )
  }
}
