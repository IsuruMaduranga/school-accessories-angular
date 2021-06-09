import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { CartCheckoutComponent } from './shopping/cart-checkout/cart-checkout.component';
import { ShoppingFormComponent } from './shopping/shopping-form/shopping-form.component';
import {MyOrdersComponent} from "./customer/my-orders/my-orders.component";

const routes: Routes = [
  { path: 'purchase', component: ShoppingFormComponent },
  { path: 'cart-checkout', component: CartCheckoutComponent},
  { path: 'my-orders', component: MyOrdersComponent}
];

@NgModule({
  imports: [FormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
