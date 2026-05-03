import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ContentChild, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child  implements AfterViewInit , AfterContentInit{

  constructor(private cd:ChangeDetectorRef)
  {}


    @ViewChild('btn') btn!: ElementRef;
    @ContentChild('header') header!: ElementRef;

 ngAfterViewInit(): void {
    if (this.btn) {
      this.btn.nativeElement.innerText = 'Changed by ViewChild';
    }
  }

  ngAfterContentInit(): void {
    if (this.header) {
      console.log('ContentChild:', this.header.nativeElement.textContent);
    }
  }



 


}
