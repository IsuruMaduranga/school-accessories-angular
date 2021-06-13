import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdminChartsComponent } from './admin-analysis/admin-charts/admin-charts.component';
import { AdminDataTableComponent } from './admin-analysis/admin-data-table/admin-data-table.component';
import { LoginComponent } from './core/components/login/login.component';
import { CartCheckoutComponent } from './shopping/cart-checkout/cart-checkout.component';
import { ShoppingFormComponent } from './shopping/shopping-form/shopping-form.component';
import {MyOrdersComponent} from "./customer/my-orders/my-orders.component";
import {CustomerAnalyticsService} from "./customer/services/customer-analytics.service";
import {CustomerAnalyticsComponent} from "./customer/customer-analytics/customer-analytics.component";

const routes: Routes = [
  { path: 'purchase', component: ShoppingFormComponent },
  { path: 'cart-checkout', component: CartCheckoutComponent},
  { path: 'admin-data-table', component: AdminDataTableComponent },
  { path: 'admin-charts', component: AdminChartsComponent },
  { path: 'my-orders', component: MyOrdersComponent},
  {path:'customer-analytics',component:CustomerAnalyticsComponent}
];

@NgModule({
  imports: [FormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
