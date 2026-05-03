import { Component } from '@angular/core';
import { Products } from "../products/products";
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Icategorys } from '../../Interfaces/categorys/icategorys';

@Component({
  selector: 'app-master-products',
  imports: [Products,TitleCasePipe,FormsModule,CurrencyPipe ],
  templateUrl: './master-products.html',
  styleUrl: './master-products.css',
})
export class MasterProducts {
  selectedName:string='all';
  catList:Icategorys[];
  totalPrice:number =0 ;

  constructor(){
      this.catList = [
  { name: 'all' },
  { name: 'beauty' },
  { name: 'fragrances' },
  { name: 'furniture' },
  { name: 'groceries' }
];
  }


  RecivedTotalPrice(data:any){
    this.totalPrice =data ;
  }

}
