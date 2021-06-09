import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './../models/order';
import { Observable } from 'rxjs';
import {TOrder} from "../models/TOrder";

@Injectable({
  providedIn: 'root'
})
export class OrderPurchaseService {

  constructor(private http: HttpClient) {}

    purchaseOrder(newOrder: Order): Observable<any> {
      return this.http.post(
        'http://localhost:8081/customer/add-order',newOrder);
    }

  getOrdersBy(): Observable<any> {
    return this.http.get<any>('http://localhost:8081/customer/get-orders');
    //todo bind orderID
  }

}
