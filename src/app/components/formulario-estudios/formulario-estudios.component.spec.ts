import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEstudiosComponent } from './formulario-estudios.component';

describe('FormularioEstudiosComponent', () => {
  let component: FormularioEstudiosComponent;
  let fixture: ComponentFixture<FormularioEstudiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioEstudiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEstudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
