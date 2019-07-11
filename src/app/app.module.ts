import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


//Administrador
import { AdministradorComponent } from './admin/administrador/administrador.component';

//Material Module
import { MaterialModule } from './material/material.module';

//SERVICES
import { EmpleadosComponent } from './admin/empleados/empleados.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { ModalComponent } from './admin/modal/modal.component';
import { AdminServicesService } from './admin/services/admin-services.service';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './login/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule
  ],
  providers: [ AdminServicesService ],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent],
})
export class AppModule { }
