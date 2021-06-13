import { Product } from './../shared/models/product';
import { AdminModule } from './../admin/admin.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ShoppingCartService } from '../shared/services/shopping-cart.service';
import { ProductsComponent } from './products/products.component';
import { ShoppingFormComponent } from './shopping-form/shopping-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CartCheckoutComponent } from './cart-checkout/cart-checkout.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { CoreModule } from '../core/core.module';
import { ProductQuantityComponent } from '../shared/product-quantity/product-quantity.component';
import {ProfileLoaderService} from "../shared/services/profile-loader.service";

@NgModule({
  declarations: [
    ShoppingCartComponent,
    ShoppingFormComponent,
    CartCheckoutComponent,
    ProductsComponent,
    ProductFilterComponent,
  ],
  imports: [
    RouterModule.forChild([]),
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    AdminModule,
    CommonModule,
    SharedModule
  ],
  providers: [
    ShoppingCartService,
    ProductQuantityComponent,
    ShoppingFormComponent,
    ProfileLoaderService
  ],
})
export class ShoppingModule {}
