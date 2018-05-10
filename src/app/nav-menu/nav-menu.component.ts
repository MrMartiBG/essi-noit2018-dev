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

  result_logout(info) {
    console.log(info);
    if(info.status == "successful"){
      this.socketFunc.isLoggedIn = false;
    }
  }

  logoutUser() {
    this.socketFunc.logoutUser(
      result_logout => this.result_logout(result_logout)
    )
  }
}
