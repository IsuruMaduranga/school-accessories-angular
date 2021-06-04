import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";
import {ShoppingCart} from "../../shared/models/shopping-cart";
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})
export class CartCheckoutComponent implements OnInit {
  cart$:ShoppingCart;


  constructor(private shoppingCartService: ShoppingCartService, private router: Router) { }


   async ngOnInit() {
    let items = await this.shoppingCartService.getCart();
    this.cart$ = new ShoppingCart(items);

   }
  clearCart(){
    this.shoppingCartService.clearCart();
  }
  purchaseCart() {
    this.router.navigate(['purchase']);
  }

}
