import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import { Empleados } from '../interfaces/empleados';
import { AdminServicesService } from '../services/admin-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {

  
  ELEMENT_DATA: Empleados;
  displayedColumns: string[] = ['id', 'nombres', 'apellidoPaterno', 'apellidoMaterno', 'cargo', 'edit', 'delete'];
  dataSource;

  constructor( private fb: FormBuilder, public dialog: MatDialog, public service: AdminServicesService, private router: Router ) { }

  

  empleadoForm = this.fb.group({
    nombres: ['', Validators.required],
    apellidoPaterno: [''],
    apellidoMaterno: [''],
    puesto: [''],
  });

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '640px'
    });
    dialogRef.afterClosed().subscribe( result => {
      //this.ELEMENT_DATA.push(result);
      if ( !result ) return;

      let nuevoEmpleado = {
        nombre_empleado: result.nombre,
        apellido_paterno: result.apellidoPaterno,
        apellido_materno: result.apellidoMaterno,
        id_puesto: result.puesto
      }
      this.crearEmpleado(nuevoEmpleado);
    });
  }

  ngOnInit() {
    this.service.obtenerEmpleados().subscribe( response => {
      this.dataSource = response.result;
      console.log(response.result);
    })
  }

  async crearEmpleado( empleado ) {
    const creado = await this.service.crearEmpleado(empleado);
    console.log( creado );

    if ( creado ) this.ngOnInit();

  }
  
}
