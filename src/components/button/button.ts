import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {

    @Input()ButtonTitle:string='';
    @Input() btnClass:string = '';
    @Input() isDisabled: boolean = false;

      @Output() btnClick = new EventEmitter<void>();
      onclick()
      {
        this.btnClick.emit();
      }
}
