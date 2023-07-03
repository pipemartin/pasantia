import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, } from '@angular/material/dialog';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { FormularioEstudiosComponent } from '../formulario-estudios/formulario-estudios.component';
import { FormularioIdiomasComponent } from '../formulario-idiomas/formulario-idiomas.component';
import { FormularioDominioInformaticaComponent } from '../formulario-dominio-informatica/formulario-dominio-informatica.component';
import { FormularioExperienciaLaboralComponent } from '../formulario-experiencia-laboral/formulario-experiencia-laboral.component';

export interface Pais {
  name: string;
}

export interface DialogData {
  nombreEstudio: string;
  nivel: string;
  fecha: Date;
  entidad: String;
  tituloObtenido: string;
}

@Component({
  selector: 'app-registro-egresados',
  templateUrl: './registro-egresados.component.html',
  styleUrls: ['./registro-egresados.component.css']
})
export class RegistroEgresadosComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef,
    public dialog: MatDialog, 
    public dialogDos: MatDialog, 
    public dialogTres: MatDialog,
    public dialogCuatro: MatDialog,
    ) {}
  options: Pais[] = [
    {name: 'Colombia'},
    {name: 'Bolivia'},
    {name: 'Mexico'},
    {name: 'Peru'}
  ];
  nombreEstudio: string;
  nivel: string;
  fecha: Date;

  filteredOptions: Observable<Pais[]>;
  panelOpenState = false;
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      firstAutocomplete: ['', Validators.required],
      cedula: ['', [Validators.pattern('^[0-9]*$'), Validators.required]],
      fijo: ['', [Validators.pattern('^[0-9]*$'), Validators.required]],
      celular: ['', [Validators.pattern('^[0-9]*$'), Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.filteredOptions = this.firstFormGroup.controls['firstAutocomplete'].valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  displayFn(user?: Pais): string | undefined {
    return user ? user.name : undefined;
  }

  private _filter(name: string): Pais[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  getErrorMessage() {
    return this.firstFormGroup.controls['email'].hasError('required') ? 'Digitar email' :
      this.firstFormGroup.controls['email'].hasError('email') ? 'email no valido' :
            '';
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(FormularioEstudiosComponent , {
      width: '500px',
      disableClose: true
      
  });
    
  dialogRef.afterClosed().subscribe(result => {
        this.cdr.detectChanges();
      }); 
  }

  openDialogDos(): void {
    const dialogRefDos = this.dialogDos.open(FormularioIdiomasComponent , {
      width: '500px',
      disableClose: true
    });

    dialogRefDos.afterClosed().subscribe(result => {
      this.cdr.detectChanges();
    });
  }

  openDialogTres(): void {
    const dialogRefTres = this.dialogTres.open(FormularioDominioInformaticaComponent , {
      width: '500px',
      disableClose: true
    });

    dialogRefTres.afterClosed().subscribe(result => {
      this.cdr.detectChanges();
    });
  }

  openDialogCuatro(): void {
    const dialogRefTres = this.dialogCuatro.open(FormularioExperienciaLaboralComponent , {
      width: '500px',
      disableClose: true
    });

    dialogRefTres.afterClosed().subscribe(result => {
        this.cdr.detectChanges();
      });
  }
}
