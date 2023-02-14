import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public prodNo: number = 22;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.prodNo = this.productsService.getProductCount();
  }

}
