import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Administrador
import { AdministradorComponent } from './admin/administrador/administrador.component';

//Material Module
import { MaterialModule } from './material/material.module';

//SERVICES
import { EmpleadosComponent } from './admin/empleados/empleados.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { ModalComponent } from './admin/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    AdministradorComponent,
    EmpleadosComponent,
    AdminComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent],
})
export class AppModule { }
