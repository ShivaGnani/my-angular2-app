import { Component, Output, EventEmitter } from "@angular/core";
import { Product } from "./component.app";
import { ADDRGETNETWORKPARAMS } from "dns";

@Component({
  selector: 'add-product',
  templateUrl: './partials/add-product.html'
})

export class AddProductComponent {
  ProductName: string;
  CategoryName: string;
  QuantityPerUnit: string;
  UnitsInStock: number;
  Discontinued: number;

  newProduct: Product;

  @Output() add = new EventEmitter();

  addNewProduct() {
    this.newProduct = new Product();
    this.newProduct.ProductName = this.ProductName;
    this.newProduct.CategoryName = this.CategoryName;
    this.newProduct.QuantityPerUnit = this.QuantityPerUnit;
    this.newProduct.UnitsInStock = this.UnitsInStock;
    this.newProduct.Discontinued = false;
    this.add.emit(this.newProduct);
  }
}
