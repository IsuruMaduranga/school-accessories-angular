import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdminChartsComponent } from './admin-analysis/admin-charts/admin-charts.component';
import { AdminDataTableComponent } from './admin-analysis/admin-data-table/admin-data-table.component';
import { LoginComponent } from './core/components/login/login.component';
import { CartCheckoutComponent } from './shopping/cart-checkout/cart-checkout.component';
import { ShoppingFormComponent } from './shopping/shopping-form/shopping-form.component';

const routes: Routes = [
  { path: 'purchase', component: ShoppingFormComponent },
  { path: 'cart-checkout', component: CartCheckoutComponent},
  { path: 'admin-data-table', component: AdminDataTableComponent },
  { path: 'admin-charts', component: AdminChartsComponent }
];

@NgModule({
  imports: [FormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
