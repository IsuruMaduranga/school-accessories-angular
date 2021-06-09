import { Category } from './../models/category';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private REST_API_SERVER = 'http://localhost:8081/category';

  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getAll(): Observable<any> {
    return this.http
      .get<any>(this.REST_API_SERVER + '/get-categories')
      .pipe(retry(3), catchError(this.handleError));
  }

  addCategory(newCategory: Category): Observable<any> {
    return this.http
      .post<any>(this.REST_API_SERVER + '/add-category', newCategory)
      .pipe(retry(3), catchError(this.handleError));
  }
}
