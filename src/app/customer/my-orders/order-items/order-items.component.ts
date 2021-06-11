import {Component, Input, OnInit} from '@angular/core';
import {TOrder} from "../../../shared/models/TOrder";
import {OrderItemsService} from "../../../shared/services/order-items.service";
import {OrderItem} from "../../../shared/models/OrderItem";

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

  orderItems:any;

  @Input()
  order :TOrder;

  constructor(private orderItemsService: OrderItemsService) { }

  ngOnInit(): void {
    this.test();
    this.orderItemsService.getItems(this.order.order_id).subscribe((myorders) => {
      this.orderItems =myorders;
    });;
    console.log("orderID="+this.orderItems);
  }

  test(){
    console.log("This works. Name is "+this.order.name);
  }

}
