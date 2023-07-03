import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDominioInformaticaComponent } from './formulario-dominio-informatica.component';

describe('FormularioDominioInformaticaComponent', () => {
  let component: FormularioDominioInformaticaComponent;
  let fixture: ComponentFixture<FormularioDominioInformaticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioDominioInformaticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioDominioInformaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
