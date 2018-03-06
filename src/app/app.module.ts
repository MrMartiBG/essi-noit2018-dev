import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatInputModule, MatIconModule} from '@angular/material';

import { AppComponent } from './app.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { SocketFuncService } from './socket-func.service';
import { AppRoutingModule } from './app-routing.module';
import { FormRegisterComponent } from './form-register/form-register.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarMenuComponent } from './car-menu/car-menu.component';
import { CarAddComponent } from './car-add/car-add.component';


@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    FormRegisterComponent,
    NavMenuComponent,
    HomeComponent,
    CarsListComponent,
    CarMenuComponent,
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
    HttpModule,
    AppRoutingModule
  ],
  providers: [SocketFuncService],
  bootstrap: [AppComponent]
})
export class AppModule { }
