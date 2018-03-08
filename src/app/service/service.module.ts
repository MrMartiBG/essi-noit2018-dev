import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatInputModule, MatIconModule} from '@angular/material';

import { SocketFuncService } from '../socket-func.service';
import { ServiceMenuComponent } from './service-menu.component';
import { ServiceListComponent } from './service-list.component';
import { ServiceAddComponent } from './service-add.component';
import { ServiceRoutingModule } from './service-routing.module';

@NgModule({
  declarations: [
    ServiceMenuComponent,
    ServiceListComponent,
    ServiceAddComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
  	MatCheckboxModule,
  	MatGridListModule,
  	MatInputModule,
  	MatIconModule,
  	BrowserAnimationsModule,
    FormsModule,
    ServiceRoutingModule,
    HttpModule
  ],
  providers: [SocketFuncService]
})
export class ServiceModule { }
