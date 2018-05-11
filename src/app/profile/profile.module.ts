import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatInputModule, MatIconModule, MatTableDataSource} from '@angular/material';

import { SocketFuncService } from '../socket-func.service';
import { ProfileComponent } from './profile.component';
import { ProfileDataComponent } from './profile-data.component';
import { ProfileCarsComponent } from './profile-cars.component';
import { ProfileModsComponent } from './profile-mods.component';
import { ProfileNotifComponent } from './profile-notif.component';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileCarsComponent,
    ProfileModsComponent,
    ProfileNotifComponent,
    ProfileDataComponent
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
