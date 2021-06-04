import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models/product';
import { ProductDataService } from 'src/app/shared/services/product-data.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Array<Product>;
  filteredProducts: Product[] = [];
  category: any;
  userList: Array<any>;
  constructor(
    private route: ActivatedRoute,
    private productDataService: ProductDataService
  ) {}

  ngOnInit(): void {
    this.populateProducts();
  }

  private populateProducts() {
    this.productDataService
      .getAll()
      .pipe(
        switchMap((products) => {
          this.products = products;
          console.log(products);
          return this.route.queryParamMap;
        })
      )
      .subscribe((params) => {
        this.category = params.get('category');
        console.log('selected category : ' + this.category);
        this.applyFilter();
      });
  }

  private applyFilter() {
    this.filteredProducts = this.category
      ? this.products.filter((p) => p.category === this.category)
      : this.products;
  }

  deleteProduct(pid: number) {
    console.log('delete ----> ' + pid);
    this.productDataService
      .delete(pid)
      .subscribe((response) => this.populateProducts());
  }
}
