import {Component, OnInit, PipeTransform} from '@angular/core';
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";
import {OrderPurchaseService} from "../../shared/services/order-purchase.service";
import {ShoppingCartItem} from "../../shared/models/shopping-cart-item";
import {Order} from "../../shared/models/order";
import {TOrder} from "../../shared/models/TOrder";
import {DecimalPipe} from "@angular/common";
import {map, startWith} from "rxjs/operators";
import {FormControl} from "@angular/forms";
import {OrderItem} from "../../shared/models/OrderItem";

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  providers:[DecimalPipe],
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  myorders:any;
  expand:boolean=false;
  index:number;
  expandedOrder:TOrder;
  filter = new FormControl('');



  constructor(pipe: DecimalPipe,private orderService : OrderPurchaseService) {

  }

    ngOnInit():void {
    this.orderService.getOrdersBy().subscribe((myorders) => {
      this.myorders =myorders;
    });

  }

  navigateToItems(){}

  expandCol(orderItem:TOrder,i:number){
    this.expandedOrder=orderItem;
    this.expand=!this.expand;
    this.index = i;
  }


}

