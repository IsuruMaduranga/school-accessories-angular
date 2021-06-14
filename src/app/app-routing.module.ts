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
import { AuthGuard } from './auth.guard';
import { ShoppingCartComponent } from './shopping/shopping-cart/shopping-cart.component';
import { AddProductFormComponent } from './admin/components/add-product-form/add-product-form.component';
import { EditProductFormComponent } from './admin/components/edit-product-form/edit-product-form.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN']
    }
  },

  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN', 'USER']
    }
  },

  {
    path: 'purchase',
    component: ShoppingFormComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['USER']
    }
  },

  {
    path: 'cart-checkout',
    component: CartCheckoutComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['USER']
    }
  },

  {
    path: 'admin-data-table',
    component: AdminDataTableComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN']
    },
  },

  {
    path: 'admin-charts',
    component: AdminChartsComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN']
    }
  },

  {
    path: 'my-orders',
    component: MyOrdersComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['USER']
    }
  },

  {
    path: 'customer-analytics',
    component: CustomerAnalyticsComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['USER']
    }
  },

  {
    path: 'shopping-cart',
    component: ShoppingCartComponent,
    data: {
      roles: ['USER']
    }
  },

  {
    path: 'add-product',
    component: AddProductFormComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN']
    }
  },

  { path: 
    'edit-product/:id', 
    component: EditProductFormComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ADMIN']
    }
  }
];

@NgModule({
  imports: [FormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
