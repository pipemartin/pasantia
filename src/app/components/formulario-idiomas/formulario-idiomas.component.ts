import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { RegistroEgresadosComponent } from '../registro-egresados/registro-egresados.component';

@Component({
  selector: 'app-formulario-idiomas',
  templateUrl: './formulario-idiomas.component.html',
  styleUrls: ['./formulario-idiomas.component.css']
})
export class FormularioIdiomasComponent implements OnInit {
  idioma: FormGroup;
  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<RegistroEgresadosComponent>) { }

  ngOnInit() {
    this.idioma = this.fb.group({
      idiomas: ['', Validators.required]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
