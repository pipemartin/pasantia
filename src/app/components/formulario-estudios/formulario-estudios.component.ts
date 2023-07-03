import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RegistroEgresadosComponent } from '../registro-egresados/registro-egresados.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-formulario-estudios',
  templateUrl: './formulario-estudios.component.html',
  styleUrls: ['./formulario-estudios.component.css']
})
export class FormularioEstudiosComponent implements OnInit {
  estudios: FormGroup;
  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<RegistroEgresadosComponent>) { }

  ngOnInit() {
    this.estudios = this.fb.group({
      profesion: ['', Validators.required]
    });
  }

  

  onNoClick(): void {
    this.dialogRef.close();
  }
  
}
