import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDarkModeDirective]',
})
export class DarkModeDirective {
  private isDark =false;

  constructor(private el:ElementRef) {}


  @HostListener('click')
  toggle() {
    this.isDark = !this.isDark;

    if (this.isDark) {
      document.body.classList.add('dark-mode');

      this.el.nativeElement.classList.remove('bi-moon');
      this.el.nativeElement.classList.add('bi-sun');
      this.el.nativeElement.style.color = 'gold';

    } else {
      document.body.classList.remove('dark-mode');

      this.el.nativeElement.classList.remove('bi-sun');
      this.el.nativeElement.classList.add('bi-moon');
      this.el.nativeElement.style.color = 'black';
    }
  }


}
