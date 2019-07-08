import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import { empleado } from '../interfaces/empleados';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {

  
  ELEMENT_DATA: empleado[] = [
    {nombres: 'Juan Alberto', apellidoPaterno: 'Hernandez', apellidoMaterno: 'Vargas', cargo: 'Cocinero'},
    {nombres: 'Raúl', apellidoPaterno: 'Diaz', apellidoMaterno: 'Puga', cargo: 'Cajero'},
    {nombres: 'Mauricio', apellidoPaterno: 'Trujillo', apellidoMaterno: 'Olivas', cargo: 'Mesero'}
  ]
  displayedColumns: string[] = ['nombres', 'apellidoPaterno', 'apellidoMaterno', 'cargo', 'edit', 'delete'];
  dataSource = this.ELEMENT_DATA;

  constructor( private fb: FormBuilder, public dialog: MatDialog ) { }

  

  empleadoForm = this.fb.group({
    nombres: ['', Validators.required],
    apellidoPaterno: [''],
    apellidoMaterno: [''],
    puesto: [''],
  });

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '640px',
      data: this.empleadoForm.value
    });
    dialogRef.afterClosed().subscribe( result => {
      this.ELEMENT_DATA.push(result);
      console.log( this.dataSource );
    });
  }


  
  ngOnInit() {
  }

  
  
}
