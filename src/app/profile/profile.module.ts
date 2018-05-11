import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatInputModule, MatIconModule, MatTableDataSource} from '@angular/material';

import { SocketFuncService } from '../socket-func.service';
import { ProfileComponent } from './profile.component';
import { ProfileDataComponent } from './data/profile-data.component';
import { ProfileDataBasicComponent } from './data/profile-data-basic.component';
import { ProfileDataAdditionalComponent } from './data/profile-data-additional.component';
import { ProfileDataPassComponent } from './data/profile-data-pass.component';
import { ProfileCarsComponent } from './cars/profile-cars.component';
import { ProfileCarsListComponent } from './cars/profile-cars-list.component';
import { ProfileCarsAddComponent } from './cars/profile-cars-add.component';
import { ProfileCarsEditComponent } from './cars/profile-cars-edit.component';
import { ProfileCarsShopComponent } from './cars/profile-cars-shop.component';
import { ProfileModsComponent } from './mods/profile-mods.component';
import { ProfileModsListComponent } from './mods/profile-mods-list.component';
import { ProfileModsAddComponent } from './mods/profile-mods-add.component';
import { ProfileNotifComponent } from './profile-notif.component';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileCarsComponent,
    ProfileCarsListComponent,
    ProfileCarsAddComponent,
    ProfileCarsEditComponent,
    ProfileCarsShopComponent,
    ProfileModsComponent,
    ProfileModsListComponent,
    ProfileModsAddComponent,
    ProfileNotifComponent,
    ProfileDataComponent,
    ProfileDataBasicComponent,
    ProfileDataAdditionalComponent,
    ProfileDataPassComponent
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
    ProfileRoutingModule,
    HttpModule
  ],
  providers: [SocketFuncService]
})
export class ProfileModule { }
