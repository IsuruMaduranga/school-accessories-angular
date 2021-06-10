import { Component, OnInit } from '@angular/core';
import { OrderPurchaseService } from 'src/app/shared/services/order-purchase.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import {NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-admin-data-table',
  templateUrl: './admin-data-table.component.html',
  styleUrls: ['./admin-data-table.component.css']
})

export class AdminDataTableComponent implements OnInit {

  countries: any[];
  searchForm: FormGroup;
  model: NgbDateStruct;

  constructor(private orderService: OrderPurchaseService, private calendar: NgbCalendar, private ngbDateParserFormatter: NgbDateParserFormatter) { }

  ngOnInit(): void {

    

    this.searchForm = new FormGroup({
      userName: new FormControl()
    });

    this.getAllOrders();


    // this.countries = [
    //   {
    //     name: 'Russia',
    //     flag: 'f/f3/Flag_of_Russia.svg',
    //     area: 17075200,
    //     population: 146989754
    //   },
    //   {
    //     name: 'Canada',
    //     flag: 'c/cf/Flag_of_Canada.svg',
    //     area: 9976140,
    //     population: 36624199
    //   },
    //   {
    //     name: 'United States',
    //     flag: 'a/a4/Flag_of_the_United_States.svg',
    //     area: 9629091,
    //     population: 324459463
    //   },
    //   {
    //     name: 'China',
    //     flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    //     area: 9596960,
    //     population: 1409517397
    //   }
    // ];


  }

  searchByName() {
    this.orderService.getAllOrdersByName(this.searchForm.controls['userName'].value).subscribe((orderList) => {
      this.countries = orderList;
      console.log(this.countries);
    });

    console.log(this.model);
  }

  getAllOrders() {
    this.orderService.getAllOrders().subscribe((orderList) => {
      this.countries = orderList;
      console.log(this.countries);
    });

  }

  selectDate(model: any) {
    let selectedDate = this.ngbDateParserFormatter.format(this.model);
    console.log(selectedDate);


    this.orderService.getOrdersByDate(selectedDate).subscribe((orderList) => {
      this.countries = orderList;
      console.log(this.countries);
    });
  }

  clearFilters() {
    this.searchForm.controls['userName'].reset();
    this.searchForm.reset();
    this.getAllOrders();
  }


  



}
