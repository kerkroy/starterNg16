import { Observable, map, startWith } from 'rxjs';

import { Component, inject, ElementRef, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
    selector: 'app-page2',
    templateUrl: './page2.component.html',
    styleUrls: ['./page2.component.scss'],
    standalone: true,
    imports: [ 
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatChipsModule,
        NgFor,
        MatIconModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        AsyncPipe 
    ]
})
export class Page2Component {

    routeId: String;

    separatorKeysCodes: number[] = [ENTER, COMMA];
    fruitCtrl = new FormControl('');
    filteredFruits: Observable<string[]>;
    fruits: string[] = ['Lemon'];
    allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  
    @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  
    announcer = inject(LiveAnnouncer);
    fly: any;

constructor(private title:Title, private route:ActivatedRoute){
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
      );
}

add(event: MatChipInputEvent): void {
  const value = (event.value || '').trim();

  if (value) {
    this.fruits.push(value);
  }

  event.chipInput!.clear();

  this.fruitCtrl.setValue(null);
}

remove(fruit: string): void {
  const index = this.fruits.indexOf(fruit);

  if (index >= 0) {
    this.fruits.splice(index, 1);

    this.announcer.announce(`Removed ${fruit}`);
  }
}

selected(event: MatAutocompleteSelectedEvent): void {
  this.fruits.push(event.option.viewValue);
  this.fruitInput.nativeElement.value = '';
  this.fruitCtrl.setValue(null);
}

private _filter(value: string): string[] {
  const filterValue = value.toLowerCase();

  return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
}

ngOnInit(){
  this.route.data.subscribe(
    ({page2Guard}) =>{ 
      this.routeId = String(page2Guard['id'])
      this.title.setTitle( 'Page2-'+ String(page2Guard['id']) );
	});
}

ngOnDestroy(){
}
}
