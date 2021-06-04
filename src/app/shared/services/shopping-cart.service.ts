import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {ShoppingCartItem} from "../models/shopping-cart-item";
import {Product} from "../models/product";
import {ShoppingCart} from "../models/shopping-cart";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  items: ShoppingCartItem[] = [];


  constructor(private http: HttpClient) {
  }



  getCart(): ShoppingCartItem[] {

    if(localStorage.getItem("cart")==null){
      return this.items;
    }
    else {
      this.items = JSON.parse(localStorage.getItem("cart")!);
      this.populateFromLocalStorage();
      return this.items;
    }

  }

  addToCart(product:Product){

    if(localStorage.getItem("cart")==null){
      this.items.push(new ShoppingCartItem(product.product_id,product.title,product.image,product.price,1,product.category_id,product.descript));
      localStorage.setItem("cart",JSON.stringify(this.items));
      return;
    }
    else{
       for(var item of this.items){
         if(item.product_id == product.product_id){
           console.log("hit heree//////////////////////"+item.title+" "+item.product_id);
           item.quantity ++;
           localStorage.setItem("cart",JSON.stringify(this.items));
           return;
         }
       }
      this.items.push(new ShoppingCartItem(product.product_id,product.title,product.image,product.price,1,product.category_id,product.descript));
       localStorage.setItem("cart",JSON.stringify(this.items));
    }


//todo
   // for(var item of this.items){
   //   if (item.title== product.title){
   //        item.quantity++;
   //        return;
   //   }
  //  }
  //  this.items.push(
 //     new ShoppingCartItem(
 //       product.category_id,
 //       product.title,
 //       product.image,
  //      product.price,
  //      1,
  //      product.category_id,
  //      product.descript
  //    )
  //  );
  }
  removeFromCart(product: Product) {
    for (var item of this.items) {
      if (item.title == product.title) {
        if (item.quantity > 1) {
           item.quantity--;
           localStorage.setItem("cart",JSON.stringify(this.items));
           return;
        }
      }
    }
  }
  clearCart() {
    if (confirm('Remove all items from Cart?')) {
      while (this.items.length > 0) {
        this.items.pop();
      }
      localStorage.removeItem("cart");
    } else {
      return;
    }
  }

  populateFromLocalStorage(){

    let local_storage:ShoppingCartItem[] =[];
    let cart: ShoppingCartItem[]=[];
    local_storage = JSON.parse(localStorage.getItem("cart")!);
    for(var item of local_storage){
       cart.push(new ShoppingCartItem(item.product_id,item.title,item.image,item.price,item.quantity,item.category_id,item.descript));
    }
    this.items = cart;
  }
}
