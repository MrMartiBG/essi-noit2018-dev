import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatInputModule, MatIconModule} from '@angular/material';

import { AppComponent } from './app.component';
import { FormLoginComponent } from './forms/form-login.component';
import { SocketFuncService } from './socket-func.service';
import { FormRegisterComponent } from './forms/form-register.component';
import { FormForgotComponent } from './forms/form-forgot.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CarsModule } from './cars/cars.module';
import { ServiceModule } from './service/service.module';
import { ModificationsModule } from './modifications/mods.module';
import { NotFoundComponent } from './not-found.component';
import { ProfileModule } from './profile/profile.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    FormRegisterComponent,
    FormForgotComponent,
    NavMenuComponent,
    HomeComponent,
    NotFoundComponent
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
    CarsModule,
    ServiceModule,
    ProfileModule,
    ModificationsModule,
    AppRoutingModule
  ],
  providers: [SocketFuncService],
  bootstrap: [AppComponent]
})
export class AppModule { }
