import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ProductsService } from "src/app/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})

export class ProductsComponent implements OnInit, OnDestroy {
  productName!: string
  isDisabled: boolean = true
  products: Array<string> = []
  private prodSub!: Subscription

  constructor(private productsService: ProductsService) {
    setTimeout(() => {
      this.isDisabled = false
    }, 3000)
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    this.prodSub = this.productsService.productsUpdated.subscribe(() => {
      this.products = this.productsService.getProducts();
    });
  }

  ngOnDestroy(): void {
    this.prodSub.unsubscribe();
  }

  onAddProduct(form: any) {
    console.log(form)
    if (form.valid) {
      // this.products.push(form.value.productName);
      this.productsService.addProduct(form.value.productName)
      form.reset()
    }
  }

  onRemoveProduct(productName: string) {
    this.products = this.products.filter(p => p !== productName)
  }
}
