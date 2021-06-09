import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import {ShoppingCartService} from "../shared/services/shopping-cart.service";
import {OrderPurchaseService} from "../shared/services/order-purchase.service";
import {RouterModule} from "@angular/router";
import {ShoppingCartComponent} from "../shopping/shopping-cart/shopping-cart.component";
import { BrowserModule } from '@angular/platform-browser';
import {NgbTypeaheadModule} from "@ng-bootstrap/ng-bootstrap";
import {ReactiveFormsModule} from "@angular/forms";
import { OrderItemsComponent } from './my-orders/order-items/order-items.component';


@NgModule({
  declarations: [
    MyOrdersComponent,
    OrderItemsComponent
  ],
  imports: [
    CommonModule, BrowserModule, NgbTypeaheadModule, ReactiveFormsModule
  ]
  , providers: [
    OrderPurchaseService
    ],
  exports:[
    MyOrdersComponent
  ]
})
export class CustomerModule { }
