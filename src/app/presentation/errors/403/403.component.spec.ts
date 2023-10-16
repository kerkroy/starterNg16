/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefusedComponent } from './403.component';

describe('RefusedComponent', () => {
  let component: RefusedComponent;
  let fixture: ComponentFixture<RefusedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefusedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefusedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
