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
import {ProfileLoaderService} from "../../shared/services/profile-loader.service";
import {UserService} from "../../core/services/user.service";

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
  give:boolean = false;
  index:number;
  expandedOrder:TOrder;
  visibilityArr:boolean[];
  lastShown:number;
  userID:number;

  filter = new FormControl('');

  page = 1;
  count = 0;
  tableSize = 8;
  tableSizes = [3, 6, 9, 12];




  constructor(pipe: DecimalPipe,private orderService : OrderPurchaseService,private profileLoaderService: ProfileLoaderService,private userService :UserService) {

  }

    ngOnInit():void {

   this.profileLoaderService.getUserID(this.userService.email).subscribe((response)=>{
     console.log(response);
      this.userID=response.user_id;
     this.fetchPosts();
     for(var i = 0;i<this.myorders.length;i++){
       this.visibilityArr.push(false);
     }
    });


  }

  navigateToItems(){}
  fetchPosts(){
    this.orderService.getOrdersByID(this.userID).subscribe((myorders) => {
      this.myorders =myorders;this.myorders=this.myorders.reverse();

    });
  }

  expandOrder(i:number){

    this.lastShown=i;
    this.visibilityArr[i]=!this.visibilityArr[i];

  }
  getTTT():any{
    for(var i=0;i<this.myorders.length;i++){
      if( this.visibilityArr[i]==true){
        return i;
      }
    }
  }
  expandCol(orderItem:TOrder,i:number){
    console.log("here working!!!");
    this.expandedOrder=orderItem;
    this.give=true;
    this.expand=!this.expand;

    this.index = i;
    console.log(this.expand +" "+this.index);

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

