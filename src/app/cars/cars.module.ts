import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatInputModule, MatIconModule, MatTableDataSource} from '@angular/material';

import { SocketFuncService } from '../socket-func.service';
import { CarMenuComponent } from './car-menu.component';
import { CarsListComponent }    from './cars-list.component';
import { CarAddComponent }  from './car-add.component';
import { CarsRoutingModule } from './cars-routing.module';

@NgModule({
  declarations: [
    CarMenuComponent,
    CarsListComponent,
    CarAddComponent
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
    CarsRoutingModule,
    HttpModule
  ],
  providers: [SocketFuncService]
})
export class CarsModule { }
