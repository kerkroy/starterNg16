import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { CommonNavigationService } from 'src/app/service/navigation/commonNavigation.component';

@Directive({
    selector: '[flyMenu]',
    standalone: true
})
export class flyMenuDirective {

  constructor( private el: ElementRef, public commonNavigation: CommonNavigationService) {
    this.setHeight( 50 )
    this.setBackgroundColor( "none" )
  }

@Input('flyMenu') 
id!: string;

@HostListener('mouseenter') onMouseEnter() {
  this.setBackgroundColor( "whitesmoke" )
}
  
@HostListener('mouseleave') onMouseLeave() {
  this.setBackgroundColor( "white" )
}
  
@HostListener('click') onMouseClick() {
    this.commonNavigation.loadComponent('/Page2/'+this.id)
}

private setHeight(height: number){
  this.el.nativeElement.style.height = height+`px`;
}

private setBackgroundColor(color: string){
  this.el.nativeElement.style.backgroundColor = color;
}
}
