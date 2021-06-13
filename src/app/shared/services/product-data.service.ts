import { Product } from './../models/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService {
  private REST_API_SERVER = 'http://localhost:8081/admin';

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
    console.log('get-all');
    return this.http
      .get<any>(this.REST_API_SERVER + '/get-products')
      .pipe(retry(3), catchError(this.handleError));
  }

  addProduct(newProduct: Product): Observable<any> {
    console.log('-----' + newProduct.category);
    return this.http
      .post(this.REST_API_SERVER + '/add-product', newProduct)
      .pipe(retry(3), catchError(this.handleError));
  }

  update(newProduct: Product) {
    return this.http
      .put(this.REST_API_SERVER + '/update-product', newProduct)
      .pipe(retry(3), catchError(this.handleError));
  }

  delete(pid: number): Observable<any> {
    // console.log('http://localhost:8081/admin/delete-product/' + pid);
    return this.http
      .delete<any>(this.REST_API_SERVER + '/delete-product/' + pid)
      .pipe(retry(3), catchError(this.handleError));
  }

  get(pid: number): Observable<Product> {
    return this.http
      .get<Product>(this.REST_API_SERVER + '/get-product/' + pid)
      .pipe(retry(3), catchError(this.handleError));
  }
}

// this.httpClient.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
// 34
//       .subscribe((response) => {
// 35
//         if (response.status === 200) {
// 36
//           this.message = 'Image uploaded successfully';
// 37
//         } else {
// 38
//           this.message = 'Image not uploaded successfully';
// 39
//         }
// 40
//       }
// 41
//       );
