import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "../Layout/navbar/navbar";
import { Footer } from "../Layout/footer/footer";
import { Products } from "../components/products/products";
import { MasterProducts } from "../components/master-products/master-products";
import { Child } from "../components/try viewchild and content child/child/child";
import { Parent } from "../components/try viewchild and content child/parent/parent";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Products, MasterProducts, Child, Parent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Lab');
}
