import { Component, OnInit } from '@angular/core';
import { SocketFuncService } from '../socket-func.service';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html'
})
export class WorkshopComponent implements OnInit {
  shops = [];
  shop_selection = {account_service_id: null};
  constructor(public socketFunc: SocketFuncService) { }
  result_shops(info) {
    console.log(info);
    this.shops = info.info;
  }
  setShopSession() {
    this.socketFunc.current_service = this.shop_selection.account_service_id;
    console.log(this.socketFunc.current_service);
  }
  ngOnInit() {
    this.socketFunc.getUserWorkshop(
      result_shops => this.result_shops(result_shops)
    );
  }

}
