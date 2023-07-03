import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';

export interface Pais {
  name: string;
}

export interface programa {
  names: string;
}

export interface Sede {
  names: string;
}

@Component({
  selector: 'app-formulario-centro-graduados',
  templateUrl: './formulario-centro-graduados.component.html',
  styleUrls: ['./formulario-centro-graduados.component.css']
})
export class FormularioCentroGraduadosComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder
  ) {}
  
  
  file_store: FileList;
  file_storeSecond: FileList;
  filteredOptions: Observable<Pais[]>;
  filteredOptionsSecond: Observable<programa[]>;
  filteredOptionsThree: Observable<Sede[]>;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  threeFormGroup: FormGroup;
  isLinear = true;
  options: Pais[] = [
    {name: 'O-'},
    {name: 'O+'},
    {name: 'A-'},
    {name: 'A+'},
    {name: 'B-'},
    {name: 'B+'},
    {name: 'AB-'},
    {name: 'AB+'}
  ];

  optionsSecond: programa[] = [
    {names: 'INGENIERO DE SOFTWARE'},
    {names: 'INGENIERO DE CIVIL'}
  ];

  optionsThree: Sede[] = [
    {names: 'Neiva'},
    {names: 'Garzon'},
    {names: 'La Plata'},
    {names: 'Pitalito'}
  ];

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      firstAutocomplete: ['', [this.validateValue.bind(this), Validators.required ]],
      email: ['', [Validators.required, Validators.email]],
      apellido: ['', [Validators.pattern('^[A-Z ]*$'), Validators.required]],
      nombre: ['', [Validators.pattern('^[A-Z ]*$'), Validators.required]],
      cedula: ['', [Validators.pattern('^[0-9]*$'), Validators.required]],
      celular: ['', [Validators.pattern('^[0-9]*$'), Validators.required]],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondAutocomplete: ['', [this.validateValueSecond.bind(this), Validators.required ]],
      threeAutocomplete: ['', [this.validateValueThree.bind(this), Validators.required ]],
      codigo: ['', [Validators.pattern('^[0-9]*$'), Validators.required]],
    });

    this.threeFormGroup = this._formBuilder.group({
      display: ['', Validators.required],
      displaySecond: ['', Validators.required],
    });

    this.filteredOptions = this.firstFormGroup.controls['firstAutocomplete'].valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );

    this.filteredOptionsSecond = this.secondFormGroup.controls['secondAutocomplete'].valueChanges
      .pipe(
        startWith(''),
        map(values => typeof values === 'string' ? values : values.names),
        map(names => names ? this._filterSecond(names) : this.optionsSecond.slice())
      );

    this.filteredOptionsThree = this.secondFormGroup.controls['threeAutocomplete'].valueChanges
      .pipe(
        startWith(''),
        map(values => typeof values === 'string' ? values : values.names),
        map(names => names ? this._filterSecond(names) : this.optionsThree.slice())
      );
  }

  displayFn(user?: Pais): string | undefined {
    return user ? user.name : undefined;
  }

  private _filter(name: string): Pais[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  displaySecond(user?: programa): string | undefined {
    return user ? user.names : undefined;
  }

  private _filterSecond(names: string): programa[] {
    const filterValueSecond = names.toLowerCase();

    return this.optionsSecond.filter(optionSecond => optionSecond.names.toLowerCase().indexOf(filterValueSecond) === 0);
  }

  displayThree(user?: programa): string | undefined {
    return user ? user.names : undefined;
  }

  private _filterThree(names: string): programa[] {
    const filterValueThree = names.toLowerCase();

    return this.optionsThree.filter(optionThree => optionThree.names.toLowerCase().indexOf(filterValueThree) === 0);
  }

  getErrorMessage() {
    return this.firstFormGroup.controls['email'].hasError('required') ? 'Digitar email' :
      this.firstFormGroup.controls['email'].hasError('email') ? 'email no valido' :
            '';
  }

  validateValue(control: FormControl): { [key: string]: any } | null {
    const value = control.value;
    if (this.options.includes(value)) {
      return null; // El valor es válido
    } else {
      return { invalidValue: true }; // El valor no es válido
    }
  }

  validateValueSecond(control: FormControl): { [key: string]: any } | null {
    const value = control.value;
    if (this.optionsSecond.includes(value)) {
      return null; // El valor es válido
    } else {
      return { invalidValue: true }; // El valor no es válido
    }
  }

  validateValueThree(control: FormControl): { [key: string]: any } | null {
    const value = control.value;
    if (this.optionsThree.includes(value)) {
      return null; // El valor es válido
    } else {
      return { invalidValue: true }; // El valor no es válido
    }
  }

  handleFileInputChange(l: FileList): void {
    this.file_store = l;
    if (l.length) {
      const f = l[0];
      this.threeFormGroup.controls['display'].patchValue(`${f.name}`);
    } else {
      this.threeFormGroup.controls['display'].patchValue("");
    }
  }

  handleFileInputChangeSecond(l: FileList): void {
    this.file_storeSecond = l;
    if (l.length) {
      const second = l[0];
      this.threeFormGroup.controls['displaySecond'].patchValue(`${second.name}`);
    } else {
      this.threeFormGroup.controls['displaySecond'].patchValue("");
    }
  }
}

