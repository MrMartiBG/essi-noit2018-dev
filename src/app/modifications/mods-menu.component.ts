import { Component } from '@angular/core';

@Component({
  template:
  `
  <nav class="navbar navbar-sticky-top navbar-dark" style="background-color: #595959; color: white;">
      <div class="container">
          <ul class="nav navbar-nav" routerLinkActive="active">
              <li class="nav-item"><a class="nav-link" routerLink="./list">Car modifications</a></li>
              <li class="nav-item"><a class="nav-link" routerLink="./add">Add modfications</a></li>
          </ul>
      </div>
  </nav>
  <router-outlet></router-outlet>
  `
})
export class ModsMenuComponent { }
