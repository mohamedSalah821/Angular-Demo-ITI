import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Iproducts } from '../../Interfaces/products/iproducts';
import { CurrencyPipe, SlicePipe, TitleCasePipe, NgStyle, NgClass } from '@angular/common';
import { FirstWordsPipePipe } from '../../pipes/first-words-pipe-pipe';
import { Zooming } from "../../directives/zooming";
import { DarkModeDirective } from "../../directives/dark-mode-directive";
import { Icategorys } from '../../Interfaces/categorys/icategorys';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Button } from "../button/button";
import { Staticdata } from '../../Services/static/staticdata';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CurrencyPipe, FirstWordsPipePipe, Zooming, DarkModeDirective, FormsModule, NgClass, Button ,RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products  implements OnChanges ,OnInit{
    productList:Iproducts[]=[];
    filterList:Iproducts[]=[];
    // catList:Icategorys[];
    selectedName :string ; 
    totalPrice:number;
    //-------------------------------------------------------------
    @Input()RecivedName:string = '' ;
    @Output() total= new EventEmitter<Number>();
    //-------------------------------------------------------------

constructor(private toastr:ToastrService , private staticdata:Staticdata ,private router:Router) {

this.totalPrice=0;
this.selectedName='all';

}
  ngOnInit(): void {
  this.filterList = this.staticdata.getAllProduct();


}
  ngOnChanges(changes: SimpleChanges): void {
    this.filterByCategory();
  }

addProduct(inp:any , pro:Iproducts){
  if (!inp.value || inp.value <= 0) {
    this.toastr.error("Enter valid count !!!");
    inp.value = "";
    return;
  }

  if(inp.value > pro.stock)
  {
    this.toastr.error("Not enough stock !!!");
    inp.value="";
    return
  }
  this.totalPrice += inp.value * pro.price;
  pro.stock -= inp.value;
  inp.value=""
  this.total.emit(this.totalPrice);
  this.toastr.success(`(${pro.title}) added successfully`);
}

filterByCategory(){
  if(this.RecivedName ==='all')
  {
    this.filterList = this.staticdata.getAllProduct();
  }
  else{
    // this.filterList=this.productList.filter(p=>p.category === this.RecivedName) ;
    this.filterList=this.staticdata.getProductByCat(this.RecivedName) ;
  }
  
  
}



deleteProduct(id:number)
{
  this.staticdata.deleteById(id);
}

gotoform(id:number)
{
  this.router.navigate(['/Updateproduct', id]);
}
}
