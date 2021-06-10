import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './../models/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderPurchaseService {

  constructor(private http: HttpClient) {}
  
    purchaseOrder(newOrder: Order): Observable<any> {
      return this.http.post(
        'http://localhost:8087/customer/add-order',newOrder);
    }

    getAllOrders(): Observable<any> {
      return this.http.get<any>('http://localhost:8087/customer/get-orders');
    }

    getAllOrdersByName(name: any): Observable<any> {
      return this.http.get<any>('http://localhost:8087/customer/get-ordersByName?name='+ name);
    }

    getOrdersByDate(date: any): Observable<any> {
      return this.http.get<any>('http://localhost:8087/customer/get-ordersByDate?date='+ date);
    }

}
