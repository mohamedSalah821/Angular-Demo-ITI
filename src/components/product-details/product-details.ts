import { Component, OnInit } from '@angular/core';
import { Staticdata } from '../../Services/static/staticdata';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Iproducts } from '../../Interfaces/products/iproducts';
import { CurrencyPipe } from '@angular/common';
import { Button } from "../button/button";

@Component({
  selector: 'app-product-details',
  imports: [RouterLink, CurrencyPipe, Button],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit  {
  id:number=0;
  product:Iproducts|null =null ;
  constructor(private staticdata:Staticdata , private activateRoute :ActivatedRoute){
  }
  ngOnInit(): void {
    this.getbyid();
    this.getDetails();
  }

  getbyid()
  {
    this.id =Number( this.activateRoute.snapshot.paramMap.get("id"));
  }

  getDetails()
  {
    this.product = this.staticdata.getProductById(this.id);
    console.log(this.product)
  }

  

}
