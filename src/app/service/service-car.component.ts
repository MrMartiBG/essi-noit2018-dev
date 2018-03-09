import { Component } from '@angular/core';
import { SocketFuncService } from '../socket-func.service';

@Component({
  template:
  `
  <nav class="navbar navbar-sticky-top navbar-dark" style="background-color: #595959;">
      <div class="container">
          <ul class="nav navbar-nav" routerLinkActive="active">
            <li class="nav-item"><a class="nav-link" routerLink="./list">Cars list</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="./add">Add a car</a></li>
          </ul>
      </div>
  </nav>
  <router-outlet></router-outlet>
  `
})
export class ServiceCarComponent {}
