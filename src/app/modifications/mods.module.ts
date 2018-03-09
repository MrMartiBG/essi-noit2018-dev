import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatInputModule, MatIconModule, MatTableDataSource} from '@angular/material';

import { SocketFuncService } from '../socket-func.service';
import { ModsMenuComponent } from './mods-menu.component';
import { ModAddComponent } from './mod-add.component';
import { ModsListComponent } from './mods-list.component';
import { ModsRoutingModule } from './mods-routing.module';

@NgModule({
  declarations: [
    ModsMenuComponent,
    ModAddComponent,
    ModsListComponent
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
    ModsRoutingModule,
    HttpModule
  ],
  providers: [SocketFuncService]
})
export class ModificationsModule { }
