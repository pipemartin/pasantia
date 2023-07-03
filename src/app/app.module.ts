import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AppRouting } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginEgresadosComponent } from './components/login-egresados/login-egresados.component';
import { RegistroEgresadosComponent } from './components/registro-egresados/registro-egresados.component';
import { FormularioEstudiosComponent } from './components/formulario-estudios/formulario-estudios.component';
import { FormularioIdiomasComponent } from './components/formulario-idiomas/formulario-idiomas.component';
import { FormularioDominioInformaticaComponent } from './components/formulario-dominio-informatica/formulario-dominio-informatica.component';
import { FormularioExperienciaLaboralComponent } from './components/formulario-experiencia-laboral/formulario-experiencia-laboral.component';
import { InicioComponent } from "./components/inicio/inicio.component";
import { FormularioCentroGraduadosComponent } from './components/formulario-centro-graduados/formulario-centro-graduados.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent, 
    LoginEgresadosComponent, 
    RegistroEgresadosComponent, 
    FormularioEstudiosComponent, 
    FormularioIdiomasComponent, 
    FormularioDominioInformaticaComponent, 
    FormularioExperienciaLaboralComponent, FormularioCentroGraduadosComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    RouterModule,
    CdkStepperModule,
    MatDialogModule,
    MatListModule,
    MatTooltipModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatExpansionModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
