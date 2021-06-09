import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderItemsService {

  constructor(private http: HttpClient) {

  }

  getItems(orderID:number):Observable<any>{
   return  this.http.get<any>("http://localhost:8081/order/get-items?orderid="+orderID);
  }
}
