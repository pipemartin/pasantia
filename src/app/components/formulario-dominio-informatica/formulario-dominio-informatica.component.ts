import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RegistroEgresadosComponent } from '../registro-egresados/registro-egresados.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-dominio-informatica',
  templateUrl: './formulario-dominio-informatica.component.html',
  styleUrls: ['./formulario-dominio-informatica.component.css']
})
export class FormularioDominioInformaticaComponent implements OnInit {
  dominio: FormGroup;
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<RegistroEgresadosComponent>) { }

  ngOnInit() {
    this.dominio = this.fb.group({
      dom: ['', Validators.required]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
