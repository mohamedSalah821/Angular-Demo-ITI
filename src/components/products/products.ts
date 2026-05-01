import { Component } from '@angular/core';
import { Iproducts } from '../../Interfaces/products/iproducts';
import { CurrencyPipe, SlicePipe, TitleCasePipe, NgStyle, NgClass } from '@angular/common';
import { FirstWordsPipePipe } from '../../pipes/first-words-pipe-pipe';
import { Zooming } from "../../directives/zooming";
import { DarkModeDirective } from "../../directives/dark-mode-directive";
import { Icategorys } from '../../Interfaces/categorys/icategorys';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  imports: [CurrencyPipe, FirstWordsPipePipe, TitleCasePipe, Zooming, DarkModeDirective, FormsModule, NgClass],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
    productList:Iproducts[];
    filterList:Iproducts[];
    catList:Icategorys[];
    selectedName :string ; 
    totalPrice:number;

constructor(private toastr:ToastrService) {
  this.productList = [
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 9.99,
      rating: 2.56,
      stock: 99,
      thumbnail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
    },
    {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      description: "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks.",
      category: "beauty",
      price: 19.99,
      rating: 2.86,
      stock: 34,
      thumbnail: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"
    },
    {
      id: 3,
      title: "Powder Canister",
      description: "Finely milled setting powder designed to control shine and give matte finish.",
      category: "beauty",
      price: 14.99,
      rating: 4.64,
      stock: 89,
      thumbnail: "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp"
    },
    {
      id: 4,
      title: "Red Lipstick",
      description: "Classic bold lipstick with creamy formula.",
      category: "beauty",
      price: 12.99,
      rating: 4.36,
      stock: 91,
      thumbnail: "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp"
    },
    {
      id: 5,
      title: "Red Nail Polish",
      description: "Glossy red nail polish with quick-dry formula.",
      category: "beauty",
      price: 8.99,
      rating: 4.32,
      stock: 79,
      thumbnail: "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp"
    },

    {
      id: 6,
      title: "Calvin Klein CK One",
      description: "Fresh unisex fragrance for everyday wear.",
      category: "fragrances",
      price: 49.99,
      rating: 4.37,
      stock: 29,
      thumbnail: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp"
    },
    {
      id: 7,
      title: "Chanel Coco Noir Eau De",
      description: "Elegant mysterious fragrance with sandalwood notes.",
      category: "fragrances",
      price: 129.99,
      rating: 4.26,
      stock: 58,
      thumbnail: "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp"
    },
    {
      id: 8,
      title: "Dior J'adore",
      description: "Luxurious floral fragrance.",
      category: "fragrances",
      price: 89.99,
      rating: 3.8,
      stock: 98,
      thumbnail: "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp"
    },
    {
      id: 9,
      title: "Dolce Shine Eau de",
      description: "Fruity youthful fragrance.",
      category: "fragrances",
      price: 69.99,
      rating: 3.96,
      stock: 4,
      thumbnail: "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/thumbnail.webp"
    },
    {
      id: 10,
      title: "Gucci Bloom Eau de",
      description: "Floral romantic fragrance.",
      category: "fragrances",
      price: 79.99,
      rating: 2.74,
      stock: 91,
      thumbnail: "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/thumbnail.webp"
    },

    {
      id: 11,
      title: "Annibale Colombo Bed",
      description: "Luxury bed frame with elegant design.",
      category: "furniture",
      price: 1899.99,
      rating: 4.77,
      stock: 88,
      thumbnail: "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp"
    },
    {
      id: 12,
      title: "Annibale Colombo Sofa",
      description: "Premium sofa with elegant upholstery.",
      category: "furniture",
      price: 2499.99,
      rating: 3.92,
      stock: 60,
      thumbnail: "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp"
    },
    {
      id: 13,
      title: "Bedside Table African Cherry",
      description: "Stylish bedside table with storage.",
      category: "furniture",
      price: 299.99,
      rating: 2.87,
      stock: 64,
      thumbnail: "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/thumbnail.webp"
    },
    {
      id: 14,
      title: "Knoll Saarinen Executive Chair",
      description: "Modern ergonomic office chair.",
      category: "furniture",
      price: 499.99,
      rating: 4.88,
      stock: 26,
      thumbnail: "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/thumbnail.webp"
    },
    {
      id: 15,
      title: "Wooden Bathroom Sink With Mirror",
      description: "Elegant bathroom sink with mirror.",
      category: "furniture",
      price: 799.99,
      rating: 3.59,
      stock: 7,
      thumbnail: "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/thumbnail.webp"
    },

    {
      id: 16,
      title: "Apple",
      description: "Fresh apples.",
      category: "groceries",
      price: 1.99,
      rating: 4.19,
      stock: 8,
      thumbnail: "https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp"
    },
    {
      id: 17,
      title: "Beef Steak",
      description: "High-quality beef steak.",
      category: "groceries",
      price: 12.99,
      rating: 4.47,
      stock: 86,
      thumbnail: "https://cdn.dummyjson.com/product-images/groceries/beef-steak/thumbnail.webp"
    },
    {
      id: 18,
      title: "Cat Food",
      description: "Nutritious cat food.",
      category: "groceries",
      price: 8.99,
      rating: 3.13,
      stock: 46,
      thumbnail: "https://cdn.dummyjson.com/product-images/groceries/cat-food/thumbnail.webp"
    },
    {
      id: 19,
      title: "Chicken Meat",
      description: "Fresh chicken meat.",
      category: "groceries",
      price: 9.99,
      rating: 3.19,
      stock: 97,
      thumbnail: "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/thumbnail.webp"
    },
    {
      id: 20,
      title: "Cooking Oil",
      description: "Cooking oil for frying.",
      category: "groceries",
      price: 4.99,
      rating: 4.8,
      stock: 10,
      thumbnail: "https://cdn.dummyjson.com/product-images/groceries/cooking-oil/thumbnail.webp"
    },

    {
      id: 21,
      title: "Cucumber",
      description: "Fresh cucumber.",
      category: "groceries",
      price: 1.49,
      rating: 4.07,
      stock: 84,
      thumbnail: "https://cdn.dummyjson.com/product-images/groceries/cucumber/thumbnail.webp"
    },
    {
      id: 22,
      title: "Dog Food",
      description: "Healthy dog food.",
      category: "groceries",
      price: 10.99,
      rating: 4.55,
      stock: 71,
      thumbnail: "https://cdn.dummyjson.com/product-images/groceries/dog-food/thumbnail.webp"
    },
    {
      id: 23,
      title: "Eggs",
      description: "Fresh eggs.",
      category: "groceries",
      price: 2.99,
      rating: 2.53,
      stock: 9,
      thumbnail: "https://cdn.dummyjson.com/product-images/groceries/eggs/thumbnail.webp"
    },
    {
      id: 24,
      title: "Fish Steak",
      description: "Fresh fish steak.",
      category: "groceries",
      price: 14.99,
      rating: 3.78,
      stock: 74,
      thumbnail: "https://cdn.dummyjson.com/product-images/groceries/fish-steak/thumbnail.webp"
    },
    {
      id: 25,
      title: "Green Bell Pepper",
      description: "Fresh pepper.",
      category: "groceries",
      price: 1.29,
      rating: 3.25,
      stock: 33,
      thumbnail: "https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/thumbnail.webp"
    },

    {
      id: 26,
      title: "Green Chili Pepper",
      description: "Spicy chili pepper.",
      category: "groceries",
      price: 0.99,
      rating: 3.66,
      stock: 3,
      thumbnail: "https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/thumbnail.webp"
    },
    {
      id: 27,
      title: "Honey Jar",
      description: "Natural honey.",
      category: "groceries",
      price: 6.99,
      rating: 3.97,
      stock: 34,
      thumbnail: "https://cdn.dummyjson.com/product-images/groceries/honey-jar/thumbnail.webp"
    },
    {
      id: 28,
      title: "Ice Cream",
      description: "Creamy ice cream.",
      category: "groceries",
      price: 5.49,
      rating: 3.39,
      stock: 27,
      thumbnail: "https://cdn.dummyjson.com/product-images/groceries/ice-cream/thumbnail.webp"
    },
    {
      id: 29,
      title: "Juice",
      description: "Fresh juice.",
      category: "groceries",
      price: 3.99,
      rating: 3.94,
      stock: 50,
      thumbnail: "https://cdn.dummyjson.com/product-images/groceries/juice/thumbnail.webp"
    },
    {
      id: 30,
      title: "Kiwi",
      description: "Fresh kiwi fruit.",
      category: "groceries",
      price: 2.49,
      rating: 4.93,
      stock: 99,
      thumbnail: "https://cdn.dummyjson.com/product-images/groceries/kiwi/thumbnail.webp"
    }
  ];

  this.catList = [
  { name: 'all' },
  { name: 'beauty' },
  { name: 'fragrances' },
  { name: 'furniture' },
  { name: 'groceries' }
];

this.totalPrice=0;
this.selectedName='all';
this.filterList= this.productList;

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
  this.toastr.success(`(${pro.title}) added successfully`);
}

filterByCategory(){
  if(this.selectedName ==='all')
  {
    this.filterList = this.productList;
  }
  else{
    this.filterList=this.productList.filter(p=>p.category === this.selectedName) ;
  }
  
  
}



}
