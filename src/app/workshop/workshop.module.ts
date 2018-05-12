import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatInputModule, MatIconModule, MatTableDataSource} from '@angular/material';

import { SocketFuncService } from '../socket-func.service';
import { WorkshopComponent } from './workshop.component';
import { WorkshopCarsComponent } from './cars/workshop-cars.component';
import { WorkshopCarsListComponent } from './cars/workshop-cars-list.component';
import { WorkshopModsComponent } from './mods/workshop-mods.component';
import { WorkshopModsListComponent } from './mods/workshop-mods-list.component';
import { WorkshopModsAddComponent } from './mods/workshop-mods-add.component';
import { WorkshopRoutingModule } from'./workshop-routing.module';

@NgModule({
  declarations: [
    WorkshopComponent,
    WorkshopCarsComponent,
    WorkshopCarsListComponent,
    WorkshopModsComponent,
    WorkshopModsListComponent,
    WorkshopModsAddComponent
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
    WorkshopRoutingModule,
    HttpModule
  ],
  providers: [SocketFuncService]
})
export class WorkshopModule { }
