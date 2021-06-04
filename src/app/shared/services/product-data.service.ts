import { Product } from './../models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService {
  constructor(private http: HttpClient) {}

    // this.productList = new Array<Product>();
    // let p1: Product = {
    //   $key: '1',
    //   title: 'Imprinted Pencils',
    //   price: 140,
    //   category: 'Pencil',
    //   imageUrl: 'assets/imgs/pencil1.jpg',
    // };
    // let p2: Product = {
    //   $key: '2',
    //   title: 'Rainbow Pencil Case',
    //   category: 'Pencil case',
    //   price: 300,
    //   imageUrl: 'assets/imgs/pencil case1.jpg',
    // };
    // let p3: Product = {
    //   $key: '3',
    //   title: 'Pen Holder',
    //   category: 'Pencil holder',
    //   price: 200,
    //   imageUrl: 'assets/imgs/pen holder1.jpg',
    // };
    // let p4: Product = {
    //   $key: '4',
    //   title: 'Sticky Notes',
    //   category: 'Sticky notes',
    //   price: 140,
    //   imageUrl: 'assets/imgs/sticky_notes.jpg',
    // };
    // let p5: Product = {
    //   $key: '5',
    //   title: 'Click Pen',
    //   category: 'Pen',
    //   price: 30,
    //   imageUrl: 'assets/imgs/pen1.jpg',
    // };
    // let p6: Product = {
    //   $key: '6',
    //   title: 'Sticky Notes Pad',
    //   category: 'Sticky notes',
    //   price: 200,
    //   imageUrl: 'assets/imgs/sticky note set.jpg',
    // };
    // let p7: Product = {
    //   $key: '7',
    //   title: 'Floral Umbrella',
    //   category: 'Umbrella',
    //   price: 400,
    //   imageUrl: 'assets/imgs/umbrella2.jpg',
    // };
    // let p8: Product = {
    //   $key: '8',
    //   title: 'Pencil Sharpner',
    //   category: 'Pencil sharpner',
    //   price: 30,
    //   imageUrl: 'assets/imgs/pencil sharpner1.jpg',
    // };
    // let p9: Product = {
    //   $key: '9',
    //   title: 'ProMate 120pgs',
    //   category: 'Book',
    //   price: 150,
    //   imageUrl: 'assets/imgs/ProMate 120.jpg',
    // };
    // let p10: Product = {
    //   $key: '10',
    //   title: 'Strip Backpack',
    //   category: 'Bag',
    //   price: 3000,
    //   imageUrl: 'assets/imgs/strip backpack.jpg',
    // };
    // this.productList.push(p1);
    // this.productList.push(p2);
    // this.productList.push(p3);
    // this.productList.push(p4);
    // this.productList.push(p5);
    // this.productList.push(p6);
    // this.productList.push(p7);
    // this.productList.push(p8);
    // this.productList.push(p9);
    // this.productList.push(p10);
 // }


  getAll(): Observable<any> {
    console.log('get-all');
    return this.http.get<any>('http://localhost:8081/admin/get-products');
  }

  addProduct(newProduct: Product): Observable<any> {
    return this.http.post(
      'http://localhost:8081/admin/add-product',newProduct);
  }

  update(newProduct: Product) {
    return this.http.put(
      'http://localhost:8081/admin/update-product',newProduct);
  }



  delete(pid: number): Observable<any> {
    return this.http.delete<any>(
      'http://localhost:8081/admin/delete-product/' + pid
    );
  }

  get(pid: number): Observable<Product> {
    return this.http.get<Product>(
      'http://localhost:8081/admin/get-product/' + pid);
  }
}
