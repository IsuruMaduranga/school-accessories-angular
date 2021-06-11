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
  pageOfItems:Array<any>;
  expand:boolean=false;
  index:number;
  expandedOrder:TOrder;
  filter = new FormControl('');

  page = 1;
  count = 0;
  tableSize = 8;
  tableSizes = [3, 6, 9, 12];




  constructor(pipe: DecimalPipe,private orderService : OrderPurchaseService) {

  }

    ngOnInit():void {
      this.fetchPosts();

  }

  navigateToItems(){}
  fetchPosts(){
    this.orderService.getOrdersBy().subscribe((myorders) => {
      this.myorders =myorders;this.myorders=this.myorders.reverse();
    });
  }

  expandCol(orderItem:TOrder,i:number){
    this.expandedOrder=orderItem;
    this.expand=!this.expand;
    this.index = i;
  }
  onTableDataChange(event:any){
    this.page = event;
    this.fetchPosts();
  }

  onTableSizeChange(event:any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }

}

