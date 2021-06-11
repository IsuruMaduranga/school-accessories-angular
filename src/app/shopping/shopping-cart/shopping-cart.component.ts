import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";
import {ShoppingCart} from "../../shared/models/shopping-cart";
import { Router } from '@angular/router';
//test test
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart$:ShoppingCart;

  constructor(private shoppingCartService: ShoppingCartService, private router: Router) { }

   async ngOnInit() {
  let items = await this.shoppingCartService.getCart();

   this.cart$ = new ShoppingCart(items);
   console.log("####"+this.cart$.totalItemsCount);
  }
  clearCart(){
    this.shoppingCartService.clearCart();
  }

  checkoutCart() {
    this.router.navigate(['cart-checkout']);
  }

  navigateToHome() {
    this.router.navigate(['products']);
  }

}
