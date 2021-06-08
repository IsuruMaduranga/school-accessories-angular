import { Category } from './../models/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<any> {
    return this.http.get<any>('http://localhost:8081/category/get-categories');
  }
  addCategory(newCategory: Category): Observable<any> {
    return this.http.post<any>(
      'http://localhost:8081/category/add-category',
      newCategory
    );
  }
}
