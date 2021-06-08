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

}
