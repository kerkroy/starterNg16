/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { flyMenuDirective } from './flyMenu.directive';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, ElementRef, asNativeElements } from '@angular/core';
import { MenuComponent } from '../../menu/menu.component';
import { By } from '@angular/platform-browser';

describe('Directive: Menu', () => {
let fixture: any;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
    imports: [MenuComponent, flyMenuDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
    .createComponent(MenuComponent);
    fixture.detectChanges(); // initial binding
  });

  // all elements with an attached HighlightDirective
   let des = fixture.debugElement.queryAll(By.directive(flyMenuDirective));// the h2 without the HighlightDirective

   it('should color 1st <h2> background "yellow"', () => {
    const bgColor = des[0].nativeElement.style.backgroundColor;
    expect(bgColor).toBe('yellow');
  });
});
