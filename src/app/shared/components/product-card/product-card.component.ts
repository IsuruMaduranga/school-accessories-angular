import { ProductDataService } from './../../services/product-data.service';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product';
import Swal from 'sweetalert2';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input()
  product: Product;
  userType: String;

  @Output()
  delete = new EventEmitter<number>();

  constructor(
    private router: Router,
    private prodcutDataService: ProductDataService,
    private userService: UserService,
    private shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.userType = this.userService.type;
  }

  deleteProduct(pid: number) {
    Swal.fire({
      title: 'Are you sure you want to delete the product?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.delete.emit(pid);
        Swal.fire('Deleted!', 'Product has been deleted.', 'success');
      }
    });
  }

  editproduct(pid: number) {
    this.router.navigate(['edit-product/' + pid]);
  }

  addToCart(pid: number) {
    this.shoppingCartService.addToCart(this.product);
    this.router.navigate(['shopping-cart']);
  }
}
