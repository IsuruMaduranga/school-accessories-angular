import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AdminAnalyticsService {

  constructor(private http: HttpClient) { }

  getAmountByCategory(): Observable<any> {
    return this.http.get<any>('http://localhost:8081/admin-analytics/category-expense');
  }
}
