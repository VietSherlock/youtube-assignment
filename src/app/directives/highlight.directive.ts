import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor( private element: ElementRef ) { 
    
  }
  
  @HostListener('click') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = "#D9D9D9";
  }

}
