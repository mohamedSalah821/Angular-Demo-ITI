import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZooming]',
})
export class Zooming {
  constructor(private elementRef:ElementRef) {}

  @HostListener('mouseover')
  onMouseOver() {
    this.elementRef.nativeElement.style.transform = 'scale(1.1)';
    this.elementRef.nativeElement.style.transition = '0.3s';
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.elementRef.nativeElement.style.transform = 'scale(1)';
  }


}
