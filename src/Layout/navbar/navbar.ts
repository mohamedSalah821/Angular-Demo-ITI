import { Component } from '@angular/core';
import { DarkModeDirective } from '../../directives/dark-mode-directive';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [DarkModeDirective, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}
