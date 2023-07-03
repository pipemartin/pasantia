import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEgresadosComponent } from './login-egresados.component';

describe('LoginEgresadosComponent', () => {
  let component: LoginEgresadosComponent;
  let fixture: ComponentFixture<LoginEgresadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginEgresadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginEgresadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
