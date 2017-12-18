import { Component } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';
import { ProductItemComponent } from './component.product-item';
import { ProductItemsService } from './service.product-items';

@Component({
  selector: 'app',
  templateUrl: './partials/app.html',
  styleUrls: ['./css/app.css']
})

export class AppComponent {
  products: Product[];
  selectedProduct: Product;

  /**
   *
   */
  constructor(private productItemsService: ProductItemsService) // Injecting custom serivice
  {
  }

  ngOnInit() {
    this.products = this.productItemsService.get();
  }

  addNewProduct(newProduct) {
    this.productItemsService.add(newProduct);
  }

  onProductClick(product) {
    this.selectedProduct = product;
  }
}

export class Product {
  ProductName: string;
  CategoryName: string;
  QuantityPerUnit: string;
  UnitsInStock: number;
  Discontinued: boolean;
}


