import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../../Interfaces/products/iproducts';
import { Staticdata } from '../../Services/static/staticdata';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-product-form',
  imports: [FormsModule , CommonModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm implements OnInit {
newProduct:Iproducts={} as Iproducts;
 isEdit: boolean = false;
  productId!: number;

  constructor(private staticdata:Staticdata , private router:Router  , private activateRoute : ActivatedRoute ){}
  ngOnInit(): void {
    const id  =Number(this.activateRoute.snapshot.paramMap.get("id"));
    if(id){
      this.isEdit = true;
      this.productId = Number(id);

       const product = this.staticdata.getProductById(this.productId);

       if (product) {
        this.newProduct = { ...product };
      }
    }

  }

  submit() {
    if (this.isEdit) {
      this.staticdata.editProduct(this.productId, this.newProduct);
    }
    else {
      const product: Iproducts = {
        ...this.newProduct,
        id: Date.now(),
        rating: 3.5,
        thumbnail: this.newProduct.thumbnail || '/Product.jpg'
      };

      this.staticdata.addProduct(product);
    }

    this.router.navigateByUrl("/master");
  }

}
