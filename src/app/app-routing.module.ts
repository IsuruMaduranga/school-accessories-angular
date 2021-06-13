import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdminChartsComponent } from './admin-analysis/admin-charts/admin-charts.component';
import { AdminDataTableComponent } from './admin-analysis/admin-data-table/admin-data-table.component';
import { LoginComponent } from './core/components/login/login.component';
import { CartCheckoutComponent } from './shopping/cart-checkout/cart-checkout.component';
import { ShoppingFormComponent } from './shopping/shopping-form/shopping-form.component';
import { MyOrdersComponent } from './customer/my-orders/my-orders.component';
import { CustomerAnalyticsService } from './customer/services/customer-analytics.service';
import { CustomerAnalyticsComponent } from './customer/customer-analytics/customer-analytics.component';
import { ProductsComponent } from './shopping/products/products.component';
import { RegisterComponent } from './core/components/register/register.component';
import { UsersComponent } from './core/components/users/users.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: UsersComponent },
  { path: 'products', component: ProductsComponent }, //both
  { path: 'purchase', component: ShoppingFormComponent }, //user
  { path: 'cart-checkout', component: CartCheckoutComponent }, //user
  { path: 'admin-data-table', component: AdminDataTableComponent }, //admin
  { path: 'admin-charts', component: AdminChartsComponent }, //admin
  { path: 'my-orders', component: MyOrdersComponent }, //user
  { path: 'customer-analytics', component: CustomerAnalyticsComponent }, //customer
];

@NgModule({
  imports: [FormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
