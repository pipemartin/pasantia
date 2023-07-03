import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-egresados',
  templateUrl: './login-egresados.component.html',
  styleUrls: ['./login-egresados.component.css']
})
export class LoginEgresadosComponent implements OnInit {
  hide = true;
  constructor() { 

  }

  ngOnInit() {
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'Debe introducir un valor' :
        this.email.hasError('email') ? 'Usuario no valido' :
            '';
  }
  password = new FormControl('', [Validators.required]);
  getErrorMessagePassword() {
    return this.password.hasError('required') ? 'Debe introducir un valor' :
            '';
  }

}
