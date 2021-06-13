import { ShoppingCartService } from './../../shared/services/shopping-cart.service';
import { ShoppingCartComponent } from './../shopping-cart/shopping-cart.component';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { OrderPurchaseService } from 'src/app/shared/services/order-purchase.service';
import { Order } from 'src/app/shared/models/order';
import {ShoppingCart} from "../../shared/models/shopping-cart";
import {ProfileLoaderService} from "../../shared/services/profile-loader.service";
import {UserService} from "../../core/services/user.service";

@Component({
  selector: 'app-shopping-form',
  templateUrl: './shopping-form.component.html',
  styleUrls: ['./shopping-form.component.css'],
})
export class ShoppingFormComponent implements OnInit {
  shoppingForm: FormGroup;
  date: Date;
  order_id:number;

  order: Order = {
    customer_id: 0,
    name: '',
    mobile_number: '',
    email: '',
    address: '',
    total_price: 0,
    order_date: ''
  }

  months = [
    { id: 1, name: '01' },
    { id: 2, name: '02' },
    { id: 3, name: '03' },
    { id: 4, name: '04' },
    { id: 1, name: '05' },
    { id: 2, name: '06' },
    { id: 3, name: '07' },
    { id: 4, name: '08' },
    { id: 1, name: '09' },
    { id: 2, name: '10' },
    { id: 3, name: '11' },
    { id: 4, name: '12' },
  ];

  years = [
    { id: 1, name: '2021' },
    { id: 2, name: '2022' },
    { id: 3, name: '2023' },
    { id: 4, name: '2024' },
    { id: 1, name: '2025' },
    { id: 2, name: '2026' },
    { id: 3, name: '2027' },
    { id: 4, name: '2028' },
    { id: 1, name: '2029' },
    { id: 2, name: '2030' },
  ];

  checkboxes = [
    { checked: false, value: 'Visa Card' },
    { checked: false, value: 'Master Card' },
  ];

  constructor(
    private router: Router,
    private shoppingCartService: ShoppingCartService,
    private orderPurchaseService: OrderPurchaseService,
    private profileLoaderService:ProfileLoaderService,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.date = new Date();
    this.shoppingForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.email),
      mobileNo: new FormControl(null, [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      ]),
      address: new FormControl(null, Validators.required),
      cardNo: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]{16}$'),
      ]),
      cvc: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]{3}$'),
      ]),
      monthExpire: new FormControl(null, Validators.required),
      yearExpire: new FormControl(null, Validators.required),
      cardType: new FormControl(),
    });

    this.profileLoaderService.getUserID(this.userService.email).subscribe((response)=>{
      console.log(response);
      this.order.customer_id=response.user_id;
    });
  }

  purchaseCart() {
    //console.log(this.shoppingForm.value);

    this.order.name = this.shoppingForm.value.userName;
    this.order.email = this.shoppingForm.value.email;
    this.order.mobile_number = this.shoppingForm.value.mobileNo;
    this.order.address = this.shoppingForm.value.address;
    this.order.total_price = new ShoppingCart(this.shoppingCartService.getCart()).totalPrice;
    Swal.fire({
      title: 'Are you sure you want to place the order?',
      showCancelButton: true,
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.value) {
        this.orderPurchaseService
          .purchaseOrder(this.order)
          .subscribe((response) => {
            //this.router.navigate(['products']);
            this.order_id=response;
            this.orderPurchaseService.fillItems(this.shoppingCartService.getCart(),this.order_id).subscribe((response)=>{
              this.shoppingCartService.clearCart();
            });

          });


        //todo



        Swal.fire('Order Placed Successfully!', 'success');
     //   this.shoppingCartService.clearCart();
        this.navigateToHome();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'The Order was Cancelled', 'error');
      }
    });
  }

  disableOther(chk: any) {
    this.checkboxes.forEach((x) => {
      if (x.value !== chk.value) {
        x.checked = !x.checked;
      }
    });
  }

  navigateToHome() {
    this.router.navigate(['products']);
  }

  navigatebackToCart() {
    this.router.navigate(['cart-checkout']);
  }
}
