import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatIconModule, MatPaginatorModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { DxDataGridModule, DxColorBoxModule  } from "devextreme-angular";
import { AppComponent } from './app.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { GridComponent } from './grid/grid.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonService } from "./service/common.service"

@NgModule({
  declarations: [
    AppComponent,
    PasswordChangeComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatIconModule,
    HttpClientModule,
    DxDataGridModule,
    DxColorBoxModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
    providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
