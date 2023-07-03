import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEgresadosComponent } from './registro-egresados.component';

describe('RegistroEgresadosComponent', () => {
  let component: RegistroEgresadosComponent;
  let fixture: ComponentFixture<RegistroEgresadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroEgresadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEgresadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
