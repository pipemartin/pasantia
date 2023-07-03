import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCentroGraduadosComponent } from './formulario-centro-graduados.component';

describe('FormularioCentroGraduadosComponent', () => {
  let component: FormularioCentroGraduadosComponent;
  let fixture: ComponentFixture<FormularioCentroGraduadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCentroGraduadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCentroGraduadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
