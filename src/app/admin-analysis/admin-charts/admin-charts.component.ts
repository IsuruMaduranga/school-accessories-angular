import { Component, OnInit } from '@angular/core';
import { AdminAnalyticsService } from 'src/app/shared/services/admin-analytics.service';

@Component({
  selector: 'app-admin-charts',
  templateUrl: './admin-charts.component.html',
  styleUrls: ['./admin-charts.component.css']
})
export class AdminChartsComponent implements OnInit {

  categoriesAmount: any[];
  constructor(private adminAnalyticsService: AdminAnalyticsService) { }

  ngOnInit(): void {
    this.getAmountForCategories();
  }

  getAmountForCategories() {
    this.adminAnalyticsService.getAmountByCategory().subscribe((amountList) => {
      this.categoriesAmount = amountList;
      console.log( this.categoriesAmount);
    })
  }

}
