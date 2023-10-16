/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonNavigationService } from './commonNavigation.component';

describe('CommonNavigationComponent', () => {
  let component: CommonNavigationService;
  let fixture: ComponentFixture<CommonNavigationService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonNavigationService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonNavigationService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
