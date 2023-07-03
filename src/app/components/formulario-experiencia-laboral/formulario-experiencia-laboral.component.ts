import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { RegistroEgresadosComponent } from '../registro-egresados/registro-egresados.component';

@Component({
  selector: 'app-formulario-experiencia-laboral',
  templateUrl: './formulario-experiencia-laboral.component.html',
  styleUrls: ['./formulario-experiencia-laboral.component.css']
})
export class FormularioExperienciaLaboralComponent implements OnInit {
  empleo: FormGroup;
  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<RegistroEgresadosComponent>) { }

  ngOnInit() {
    this.empleo = this.fb.group({
      empleos: ['', Validators.required]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
