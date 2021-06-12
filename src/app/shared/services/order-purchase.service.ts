import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './../models/order';
import { Observable } from 'rxjs';
import {TOrder} from "../models/TOrder";
import {ShoppingCartItem} from "../models/shopping-cart-item";

@Injectable({
  providedIn: 'root'
})
export class OrderPurchaseService {

  constructor(private http: HttpClient) {}

    purchaseOrder(newOrder: Order): Observable<any> {
      return this.http.post(
        'http://localhost:8081/customer/add-order2',newOrder);
    }

    fillItems(items: ShoppingCartItem[],order_id:number):Observable<any>{

      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }

      var Items = [];
      for (let i = 0; i < items.length; i++) {
        let newName = {
          orderID: order_id,
          order_id:order_id,
          product_id:items[i].product_id,
          quantity:items[i].quantity
        };
        Items.push(newName);
      }
      return this.http.post('http://localhost:8081/customer/add-order-items',JSON.stringify(Items),httpOptions);
    }

  getOrdersBy(): Observable<any> {
    return this.http.get<any>('http://localhost:8081/customer/get-orders');
    //todo bind orderID
  }

}
