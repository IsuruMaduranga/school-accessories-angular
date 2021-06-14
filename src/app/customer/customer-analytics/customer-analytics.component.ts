import { Component, OnInit } from '@angular/core';
import {CustomerAnalyticsService} from "../services/customer-analytics.service";
import {resolveFileWithPostfixes} from "@angular/compiler-cli/ngcc/src/utils";
import {UserService} from "../../core/services/user.service";

@Component({
  selector: 'app-customer-analytics',
  templateUrl: './customer-analytics.component.html',
  styleUrls: ['./customer-analytics.component.css']
})
export class CustomerAnalyticsComponent implements OnInit {

  expense:any;
  statics:any;
  orderIDs:any;
  email:string;
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  }


  constructor(private customerAnalyticsService: CustomerAnalyticsService,private userService:UserService ) { }

  ngOnInit(): void {
    this.email = this.userService.email;

    this.customerAnalyticsService.getCategoryWiseExpenditure(this.email).subscribe((response) => {
          this.expense = response;
    });
    this.customerAnalyticsService.getStatics(this.email).subscribe((response)=>{
      this.statics=response;
    });
    this.customerAnalyticsService.getOrderIDs(this.email).subscribe((response)=>{
      this.orderIDs = response;
    });
  }

  selectViewOption(value:string){

    if(!(value=="-1")){

      this.customerAnalyticsService.getCategoryWiseExpenditureForOrder(this.email,value).subscribe((response)=>{
        this.expense = response;
      });
    }
    else{
      this.customerAnalyticsService.getCategoryWiseExpenditure(this.email).subscribe((response) => {
        this.expense = response;
      });
    }

  }

  getOrdeIDs(){
    this.customerAnalyticsService.getOrderIDs(this.email).subscribe((response)=>{
      this.orderIDs = response;
    });
  }

}
