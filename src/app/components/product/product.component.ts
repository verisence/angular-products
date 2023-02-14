import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() productName!: string;
  @Output() prodClicked = new EventEmitter();
  productDesc: string = 'Lorem ipsum dolor sit amet.'

  constructor(private productsService: ProductsService) { }

  onClicked() {
    // this.prodClicked.emit();
    this.productsService.deleteProduct(this.productName)
  }

}
