import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products = ['Beef', 'Chicken', 'Eggs', 'Milk'];
  productsUpdated = new Subject();

  getProductCount() {
    return this.products.length;
  }

  addProduct(productName: string) {
    this.products.push(productName);
    this.productsUpdated.next(this.products);
  }

  getProducts() {
    return [...this.products]
  }

  deleteProduct(productName: string) {
    this.products = this.products.filter(p => p !== productName)
    this.productsUpdated.next(this.products)
  }


  constructor() { }
}
