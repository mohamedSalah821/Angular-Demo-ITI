import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "../Layout/navbar/navbar";
import { Footer } from "../Layout/footer/footer";
import { Products } from "../components/products/products";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Products],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Lab');
}
