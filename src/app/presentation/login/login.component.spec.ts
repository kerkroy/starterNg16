/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDialog } from './login.component';

describe('LoginComponent', () => {
  let component: LoginDialog;
  let fixture: ComponentFixture<LoginDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
