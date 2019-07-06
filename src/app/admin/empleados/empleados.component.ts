import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {

  constructor( private fb: FormBuilder ) { }

  empleadoForm = this.fb.group({
    nombres: ['', Validators.required],
    apellidoPaterno: [''],
    apellidoMaterno: [''],
    puesto: [''],
  });


  getErrorMessage() {
    return this.empleadoForm.controls.nombres.hasError('required') ? 'Ingresa el nombre del empleado' :
        this.empleadoForm.hasError('') ? 'Not a valid email' :
            '';
  }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.empleadoForm.value);
  }
  
}
