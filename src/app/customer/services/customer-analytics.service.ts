import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerAnalyticsService {

  constructor(private http:HttpClient) {

  }

  getCategoryWiseExpenditure(email:string): Observable<any>{
    return  this.http.get("http://localhost:8087/Customer-Analytics/Category-Expense?email="+email);
  }

  getCategoryWiseExpenditureForOrder(email:string,orderId:string){
    return  this.http.get("http://localhost:8087/Customer-Analytics/Category-Expense?email="+email+"&orderID="+orderId);

  }

  getStatics(email: string):Observable<any>{
    return this.http.get("http://localhost:8087/Customer-Analytics/Statics?email="+email);
  }

  getOrderIDs(email: string):Observable<any>{
    return this.http.get("http://localhost:8087/Customer-Analytics/orderIDs?email="+email);
  }


}
