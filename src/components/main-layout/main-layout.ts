import { Component } from '@angular/core';
import { Navbar } from "../../Layout/navbar/navbar";
import { Footer } from "../../Layout/footer/footer";
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [Navbar, Footer, RouterOutlet , CommonModule , RouterModule],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {}
