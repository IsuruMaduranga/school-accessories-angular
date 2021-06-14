import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ShoppingCartService } from '../shared/services/shopping-cart.service';
import { OrderPurchaseService } from '../shared/services/order-purchase.service';
import { RouterModule } from '@angular/router';
import { ShoppingCartComponent } from '../shopping/shopping-cart/shopping-cart.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderItemsComponent } from './my-orders/order-items/order-items.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerAnalyticsComponent } from './customer-analytics/customer-analytics.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    MyOrdersComponent,
    OrderItemsComponent,
    OrderItemsComponent,
    CustomerAnalyticsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbTypeaheadModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    FormsModule,
    CoreModule,
  ],
  providers: [OrderPurchaseService],
  exports: [MyOrdersComponent],
})
export class CustomerModule {}
