import { Component } from '@angular/core';
import { SocketFuncService } from './socket-func.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ESSI';
  constructor(private socketFunc: SocketFuncService) { }
}
