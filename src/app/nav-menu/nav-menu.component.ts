import { Component, OnInit } from '@angular/core';
import { SocketFuncService } from '../socket-func.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor(public socketFunc: SocketFuncService) { }

  ngOnInit() {
  }

  result(info) {
    console.log(info);
  }

  logoutUser() {
    this.socketFunc.logoutUser(
      this.result
    )
  }
}
