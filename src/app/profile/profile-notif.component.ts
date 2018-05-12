import { Component, OnInit } from '@angular/core';
import { SocketFuncService } from '../socket-func.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile-notif.component.html'
})
export class ProfileNotifComponent implements OnInit {
  notifs = [];

  constructor(private socketFunc: SocketFuncService) { }
  result_get(info) {
    console.log(info);
    this.notifs = info.info;
  }
  ngOnInit() {
    this.socketFunc.getNotifUser(
      result_get => this.result_get(result_get)
    );
  }
}
