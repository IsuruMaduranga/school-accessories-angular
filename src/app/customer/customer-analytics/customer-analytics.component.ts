import { Component, OnInit } from '@angular/core';
import {CustomerAnalyticsService} from "../services/customer-analytics.service";
import {resolveFileWithPostfixes} from "@angular/compiler-cli/ngcc/src/utils";

@Component({
  selector: 'app-customer-analytics',
  templateUrl: './customer-analytics.component.html',
  styleUrls: ['./customer-analytics.component.css']
})
export class CustomerAnalyticsComponent implements OnInit {

  expense:any;
  statics:any;
  orderIDs:any;
  email:string="customer1@gmail.com"


  constructor(private customerAnalyticsService: CustomerAnalyticsService) { }

  ngOnInit(): void {
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
      console.log("we have value ="+value);
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
