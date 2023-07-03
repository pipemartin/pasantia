import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioExperienciaLaboralComponent } from './formulario-experiencia-laboral.component';

describe('FormularioExperienciaLaboralComponent', () => {
  let component: FormularioExperienciaLaboralComponent;
  let fixture: ComponentFixture<FormularioExperienciaLaboralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioExperienciaLaboralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioExperienciaLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
