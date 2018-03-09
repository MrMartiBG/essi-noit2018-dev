import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatInputModule, MatIconModule} from '@angular/material';

import { SocketFuncService } from '../socket-func.service';
import { ServiceCarAddComponent } from './service-car-add.component';
import { ServiceCarListComponent } from './service-car-list.component';
import { ServiceCarComponent } from './service-car.component';
import { ServiceMenuComponent } from './service-menu.component';
import { ServiceUserListComponent } from './service-user-list.component';
import { ServiceUserAddComponent } from './service-user-add.component';
import { ServiceToolsComponent } from './service-tools.component';
import { ServiceCreateServiceComponent } from './service-create-service.component';
import { ServiceListServiceComponent } from './service-list-service.component';

import { ServiceRoutingModule } from './service-routing.module';

@NgModule({
  declarations: [
    ServiceCarAddComponent,
    ServiceCarListComponent,
    ServiceCarComponent,
    ServiceUserListComponent,
    ServiceUserAddComponent,
    ServiceToolsComponent,
    ServiceCreateServiceComponent,
    ServiceListServiceComponent,
    ServiceMenuComponent
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
