import { Component } from "@angular/core";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})

export class ProductsComponent {
  productName: string = 'Book 1'
  isDisabled: boolean = true
  products: Array<string> = ['book', 'tree']

  constructor() {
    setTimeout(() => {
      this.isDisabled = false
    }, 3000)
  }

  onAddProduct() {
    this.products.push(this.productName)
  }
}
