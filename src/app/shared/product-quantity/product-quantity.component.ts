import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {ShoppingCartService} from "../services/shopping-cart.service";
import {ShoppingCart} from "../models/shopping-cart";

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit {

  @Input('product') product: Product;
  @Input('shopping-cart') shoppingCart:ShoppingCart;
  ngOnInit(): void {
  }

  constructor(private cartService: ShoppingCartService) { }

  addToCart(product:Product) {
    this.cartService.addToCart(this.product);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product);
  }

}
